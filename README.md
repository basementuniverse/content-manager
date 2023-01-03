# Game Component: Content Manager

A component for loading content assets and providing access to them.

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

Check content manager progress and status:
```ts
console.log(ContentManager.progress); // something like 0.5 or 1
console.log(ContentManager.status); // 0: Idle, 1: Loading, 2: Loaded
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
| `simulateSlowLoading` | `boolean` | `false` | If true, simulate long loading times |
| `slowLoadingTimeMin` | `number` | `1000` | Minimum simulated loading time in ms |
| `slowLoadingTimeMax` | `number` | `3000` | Maximum simulated loading time in ms |
| `throwOnNotFound` | `boolean` | `false` | Throw an error when an unknown content item is fetched with `get()` |

### Default loaders

The following loaders are registered by default:

```ts
{
  "json": JSONLoader,
  "font": FontLoader,
  "image": ImageLoader,
  "audio": AudioLoader,
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

## Other components

* [Camera](https://www.npmjs.com/package/@basementuniverse/camera)
* [Content Manager](https://www.npmjs.com/package/@basementuniverse/content-manager)
* [Debug](https://www.npmjs.com/package/@basementuniverse/debug)
* [Input Manager](https://www.npmjs.com/package/@basementuniverse/input-manager)
* [Scene Manager](https://www.npmjs.com/package/@basementuniverse/scene-manager)
