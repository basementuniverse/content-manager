# Content Manager API Reference

TypeScript/JavaScript asset loading library for browser environments. Manages loading and processing of game/application content (images, audio, fonts, JSON, text).

## Core API

### ContentManager (Static Class)

**ContentManager.initialise(options?: Partial<ContentManagerOptions>): void**
- Must be called before use (singleton pattern)
- Throws if already initialised
- Merges provided options with defaults

**ContentManager.dispose(): void**
- Destroys singleton instance
- Throws if not initialised

**ContentManager.load(items?: ContentListItem[]): Promise<void>**
- Loads content items sequentially using registered loaders
- Updates progress during loading/processing
- Re-loads existing items if names match
- Processes items after loading (if processors specified)
- Status transitions: Idle → Loading → Processing → Ready
- Returns when all items loaded and processed

**ContentManager.get<T>(name: string): T | undefined**
- Retrieves loaded content by name
- Returns `undefined` if not found (unless `throwOnNotFound: true`)
- Type parameter T specifies expected return type

**ContentManager.progress: number** (getter)
- Returns loading progress as scalar [0, 1]
- Includes both loading and processing tasks
- Returns 1 when no content loaded or all complete

**ContentManager.status: ContentManagerStatus** (getter)
- Returns current status: 'idle' | 'loading' | 'processing' | 'ready'

## Types

### ContentManagerOptions
```typescript
{
  loaders: ContentLoaderMap;              // Required: loader functions by type
  processors?: ContentProcessorMap;        // Optional: processor functions by name
  simulateSlowLoading?: boolean;          // Default: false
  slowLoadingTimeMin?: number;            // Default: 1000 (ms)
  slowLoadingTimeMax?: number;            // Default: 3000 (ms)
  simulateSlowProcessing?: boolean;       // Default: false
  slowProcessingTimeMin?: number;         // Default: 1000 (ms)
  slowProcessingTimeMax?: number;         // Default: 3000 (ms)
  throwOnNotFound?: boolean;              // Default: false
}
```

### ContentListItem
```typescript
{
  name: string;                           // Unique identifier for content
  type: ContentItemType | string;         // Loader type to use
  args: any[];                            // Arguments passed to loader
  processors?: ContentProcessorListItem[]; // Post-load processors
}
```

### ContentProcessorListItem
```typescript
{
  name: string;                           // Processor name
  args?: any[];                           // Arguments passed to processor
}
```

### ContentItem<T>
```typescript
{
  name: string;
  type: ContentItemType | string;
  content: T;                             // Loaded asset
  status: ContentItemStatus;              // 'idle' | 'loading' | 'loaded' | 'processing' | 'processed'
}
```

### ContentLoader
```typescript
type ContentLoader = <T>(...args: any[]) => Promise<T>;
```

### ContentProcessor
```typescript
type ContentProcessor = <T = any>(
  content: Record<string, ContentItem>,   // All loaded content (mutable)
  item: ContentItem<T>,                   // Current item being processed (mutable)
  ...args: any[]                          // From ContentProcessorListItem.args
) => Promise<void>;
```

### ContentLoaderMap
```typescript
type ContentLoaderMap = {
  [key in ContentItemType | string]: ContentLoader;
};
```

### ContentProcessorMap
```typescript
type ContentProcessorMap = {
  [key: string]: ContentProcessor;
};
```

## Default Loaders

### JSONLoader
```typescript
args: [urlOrData: any]
returns: Promise<T>
```
- If `urlOrData` is string starting with `"url:"`: fetches JSON from URL (substring from index 4)
- Otherwise: returns `urlOrData` directly as-is
- URL fetch uses GET with `application/json` content-type

### ImageLoader
```typescript
args: [url: string]
returns: Promise<HTMLImageElement>
```
- Creates `Image` element, sets `src`, resolves on `load` event
- Rejects with error message on `error` event

### AudioLoader
```typescript
args: [url: string]
returns: Promise<HTMLAudioElement>
```
- Creates `Audio` element, resolves on `loadeddata` event
- Rejects with error message on `error` event

### FontLoader
```typescript
args: [url: string, family: string]
returns: Promise<FontFace>
```
- Creates `FontFace`, loads font, adds to `document.fonts`
- `family` parameter sets font-family name

### TextLoader
```typescript
args: [urlOrText: any]
returns: Promise<string>
```
- If `urlOrText` starts with `"url:"`: fetches text from URL (substring from index 4)
- Otherwise: returns `urlOrText.toString()`
- URL fetch uses GET with `text/plain` content-type

## Default Processors

### ImageNameProcessor
```typescript
args: [options?: Partial<ImageNameProcessorOptions>]
```

**ImageNameProcessorOptions:**
```typescript
{
  imageNameFieldName: string;  // Default: "imageName"
  imageFieldName: string;      // Default: "image"
}
```

**Behavior:**
- Recursively traverses `item.content` object tree
- Finds fields matching `imageNameFieldName`
- Looks up content item with that name
- Replaces with `imageFieldName` containing the loaded image content
- Deletes original `imageNameFieldName` field
- Used to convert image name references to actual image objects in JSON data

## Usage Pattern

```typescript
// 1. Initialize
ContentManager.initialise({
  loaders: { custom: MyLoader },      // Optional: extend default loaders
  processors: { custom: MyProcessor }, // Optional: extend default processors
  throwOnNotFound: true
});

// 2. Load content
await ContentManager.load([
  {
    name: 'sprite',
    type: 'image',
    args: ['./sprite.png']
  },
  {
    name: 'data',
    type: 'json',
    args: ['url:./data.json'],
    processors: [{ name: 'imageName', args: [{ imageNameFieldName: 'img' }] }]
  }
]);

// 3. Check progress/status during loading
ContentManager.progress  // 0.0 to 1.0
ContentManager.status    // 'loading', 'processing', or 'ready'

// 4. Retrieve content
const sprite = ContentManager.get<HTMLImageElement>('sprite');
const data = ContentManager.get<any>('data');
```

## Key Behaviors

- Loaders execute sequentially in array order
- Progress calculation: `currentProgress / (itemCount + totalProcessorCount)`
- Processors run after ALL items loaded
- Processors can mutate `content` dictionary and `item` objects
- Content items persist across multiple `load()` calls (can reload by name)
- Singleton pattern: only one instance per application
- Browser-specific: uses `window.fetch`, `Image`, `Audio`, `FontFace`, `document.fonts`

## Custom Loader Example

```typescript
const MyLoader: ContentLoader = async <T>(url: string): Promise<T> => {
  const response = await fetch(url);
  return await response.json();
};

ContentManager.initialise({
  loaders: { myType: MyLoader }
});

await ContentManager.load([{
  name: 'item',
  type: 'myType',
  args: ['./data.json']
}]);
```

## Custom Processor Example

```typescript
const MyProcessor: ContentProcessor = async (content, item, scale: number) => {
  // Modify item.content
  if (item.content instanceof HTMLImageElement) {
    item.content.width *= scale;
  }

  // Add new content items
  content['derived'] = {
    name: 'derived',
    type: 'custom',
    content: { derived: true },
    status: ContentItemStatus.Processed
  };
};

ContentManager.initialise({
  processors: { scale: MyProcessor }
});

await ContentManager.load([{
  name: 'sprite',
  type: 'image',
  args: ['./sprite.png'],
  processors: [{ name: 'scale', args: [2] }]
}]);
```

## Error Conditions

- `initialise()` throws if already initialised
- `dispose()`, `load()`, `get()` throw if not initialised
- `load()` throws if no loaders defined
- `load()` throws if loader type not found in loaders map
- `load()` throws if processor name not found in processors map
- `get()` throws if item not found (only when `throwOnNotFound: true`)
- Loaders reject promise on asset load failure
