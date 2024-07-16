# Game Component: Content Manager

A component for loading content assets and providing access to them.

## Installation

```bash
npm install @basementuniverse/content-manager
```

## How to use

Initialise the content manager before use:

```ts
import ContentManager from '@basementuniverse/content-manager';

ContentManager.initialise();
```

Load content assets:

```ts
ContentManager.load([
  {
    name: 'my-item-1',
    type: 'json',
    args: ['https://some-url.com/test.json'],
  },
]);
```

_Note: when using the "json" or "text" loaders, the argument can either be a URL to the content or the content itself. For example:_

```ts
ContentManager.load([
  {
    name: 'my-item-1',
    type: 'json',
    args: [{ a: 1 }],
  },
]);
```

Check content manager progress and status:
```ts
console.log(ContentManager.progress); // a number between 0 (nothing loaded yet) and 1 (finished loading)
console.log(ContentManager.status); // 0: Idle, 1: Loading, 2: Processing, 3: Ready
```

Fetch a content asset:

```ts
const item = ContentManager.get('my-item-1');
```

## Options

```ts
const options = { ... };
ContentManager.initialise(options);
```

| Option | Type | Default | Description |
| --- | --- | --- | --- |
| `loaders` | `ContentLoaderMap` | (see below) | A dictionary of content loader functions |
| `processors` | `ContentProcessorMap` | (see below) | A dictionary of content processor functions |
| `simulateSlowLoading` | `boolean` | `false` | If true, simulate long loading times |
| `slowLoadingTimeMin` | `number` | `1000` | Minimum simulated loading time in ms |
| `slowLoadingTimeMax` | `number` | `3000` | Maximum simulated loading time in ms |
| `simulateSlowProcessing` | `boolean` | `false` | If true, simulate long processing times |
| `slowProcessingTimeMin` | `number` | `1000` | Minimum simulated processing time in ms |
| `slowProcessingTimeMax` | `number` | `3000` | Maximum simulated processing time in ms |
| `throwOnNotFound` | `boolean` | `false` | Throw an error when an unknown content item is fetched with `get()` |

## Loaders

A loader is a function which takes some arguments (as defined in the content list which is passed to `ContentManager.load`, as mentioned above) and returns some kind of content asset.

```ts
type ContentLoader = <T>(...args: any[]) => Promise<T>;
```

Some basic loaders are provided by default:

```ts
{
  "json": JSONLoader,    // Loads JSON (either inline or from a URL)
  "font": FontLoader,    // Loads a font from a URL and returns a FontFace
  "image": ImageLoader,  // Loads an image from a URL and returns an HTMLImageElement
  "audio": AudioLoader,  // Loads an audio file from a URL and returns an HTMLAudioElement
  "text": TextLoader,    // Loads text (either inline or from a URL)
}
```

## Implementing a custom content loader

Define a function with a signature that matches `ContentLoader`:

```ts
import { ContentLoader } from '@basementuniverse/content-manager';

export const MyCustomLoader: ContentLoader = async <HTMLImageElement>(
  url: string
): Promise<HTMLImageElement> => {
  return new Promise<HTMLImageElement>((resolve, reject) => {
    const image = new Image();
    image.src = url;
    image.addEventListener('load', () => {
      resolve(image as any);
    });
    image.addEventListener('error', () => {
      reject(`Error loading image "${url}"`);
    });
  });
};
```

Register the loader when initialising the content manager:

```ts
ContentManager.initialise({
  loaders: {
    custom: MyCustomLoader,
  },
});
```

_Note: the key (in this example: `custom`) is the name of the loader._

Load content assets using the custom loader:

```ts
ContentManager.load([
  {
    name: 'my-custom-item-1',
    type: 'custom',
    args: ['./test.png'],
  },
]);
```

## Processors

A processor is a function which takes the full list of loaded content, the current content item being processed, and some optional arguments. This function might mutate the content item or add new content items to the list.

Processor functions are run after all content items have been loaded.

This could be useful for post-processing, e.g. chopping up a texture atlas into multiple textures, unpacking compressed data, or linking together multiple content items into a data structure, etc.

```ts
export type ContentProcessor = <T = any>(
  content: Record<string, ContentItem>,
  item: ContentItem<T>,
  ...args: any[]
) => Promise<void>;
```

## Implementing a custom content processor

Define a function with a signature that matches `ContentProcessor`:

```ts
import { ContentProcessor } from '@basementuniverse/content-manager';

export const MyCustomProcessor: ContentProcessor = async (
  content,
  item
): Promise<void> => {
  // Do some processing here...

  // We can modify `content` (e.g. by adding/removing/changing items)
  // We can also modify `item` (e.g. by swapping out `item.content`)
};
```

Register the processor when initialising the content manager:

```ts
ContentManager.initialise({
  processors: {
    custom: MyCustomProcessor,
  },
});
```

_Note: the key (in this example: `custom`) is the name of the processor._

Load content assets and process them using the custom processor:

```ts
ContentManager.load([
  {
    name: 'my-custom-item-1',
    type: 'image',
    args: ['./test.png'],
    processors: [
      {
        name: 'custom',
        args: [], // Optional, will be passed to the processor as the 3rd+ args
      },
    ],
  },
]);
```

## Image Name Processor

A processor is provided which converts fields in JSON content objects which contain image names into actual image objects. The image names refer to content items which have been loaded with the `image` loader.

By default the processor recursively searches for fields called `imageName` and replaces them with fields called `image`, however this is configurable.

Example:

`content.json`:

```json
[
  {
    "name": "sky",
    "type": "image",
    "args": ["./sky.png"]
  },
  {
    "name": "tree",
    "type": "image",
    "args": ["./tree.png"]
  },
  {
    "name": "level-data",
    "type": "json",
    "args": [
      {
        "background": {
          "imageName": "sky",
          "position": [0, 0]
        },
        "objects": [
          {
            "imageName": "tree",
            "position": [100, 100]
          },
          {
            "imageName": "tree",
            "position": [200, 100]
          }
        ]
      }
    ],
    "processors": [
      {
        "name": "imageName",
        "args": [
          {
            "imageNameFieldName": "imageName",
            "imageFieldName": "image"
          }
        ]
      }
    ]
  }
]
```

_Note: the args provided to the processor are optional. In the example above we have explicitly defined the field names to show how it's done, but if omitted the processor will default to these values anyway._

Then we initialise the content manager and start loading content:

```ts
import * as content from './content.json';

ContentManager.initialise();
ContentManager.load(content);
```

This should result in the following content items being available:

```ts
const skyImage = ContentManager.get('sky'); // HTMLImageElement

const treeImage = ContentManager.get('tree'); // HTMLImageElement

const levelData = ContentManager.get('level-data');
// {
//   background: {
//     image: HTMLImageElement, <-- the 'sky' content item
//     position: [0, 0],
//   },
//   objects: [
//     {
//       image: HTMLImageElement, <-- the 'tree' content item
//       position: [100, 100],
//     },
//     {
//       image: HTMLImageElement, <-- the 'tree' content item
//       position: [200, 100],
//     },
//   ],
// }
```

## Compiling content

A utility script is provided for compiling and minifying content.

```bash
ts-node compile-content.ts -i 'content.json' -o 'content-compiled.json'
```

This script will:

1. open the input file (in the example above this is `content.json`)
2. fetch any `text`/`json` items which have a file path or URL as their first argument
3. insert their contents directly into the content JSON
4. save the resulting JSON into the output file
