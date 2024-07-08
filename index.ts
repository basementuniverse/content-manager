import {
  AudioLoader,
  FontLoader,
  ImageLoader,
  JSONLoader,
  TextLoader,
} from './content-loaders';
import {
  ImageNameProcessor,
} from './content-processors';

export type ContentManagerOptions = {
  /**
   * A dictionary of content loader functions, one for each supported
   * content type
   *
   * Default content loaders are:
   * - `json` for loading JSON data (either from URL or inline)
   * - `font` for loading fonts into `document.fonts`, returns a FontFace
   * - `image` for loading images, returns an HTMLImageElement
   * - `audio` for loading audio, returns an HTMLAudioElement
   * - `text` for loading plain tet data (either from URL or inline)
   */
  loaders: ContentLoaderMap;

  /**
   * A dictionary of content processor functions
   */
  processors?: ContentProcessorMap;

  /**
   * If true, simulate each content item taking some time to load
   *
   * Default is false
   */
  simulateSlowLoading?: boolean;

  /**
   * Minimum amount of time for loading an item when simulating slow loading
   *
   * Default is 1000
   */
  slowLoadingTimeMin?: number;

  /**
   * Maximum amount of time for loading an item when simulating slow loading
   *
   * Default is 3000
   */
  slowLoadingTimeMax?: number;

  /**
   * If true, simulate each content item taking some time to process
   *
   * Default is false
   */
  simulateSlowProcessing?: boolean;

  /**
   * Minimum amount of time for processing an item when simulating slow
   * processing
   *
   * Default is 1000
   */
  slowProcessingTimeMin?: number;

  /**
   * Maximum amount of time for processing an item when simulating slow
   * processing
   *
   * Default is 3000
   */
  slowProcessingTimeMax?: number;

  /**
   * Should we throw an error when a requested content item is not found?
   *
   * Default is true
   */
  throwOnNotFound?: boolean;
};

export enum ContentItemType {
  JSON = 'json',
  Font = 'font',
  Image = 'image',
  Audio = 'audio',
  Text = 'text',
}

export enum ContentManagerStatus {
  Idle = 0,
  Loading,
  Processing,
  Ready
}

export enum ContentItemStatus {
  Idle = 0,
  Loading,
  Loaded,
  Processing,
  Processed
}

export type ContentListItem = {
  name: string;
  type: ContentItemType | string;
  args: any[];
  processors?: ContentProcessorListItem[];
};

export type ContentProcessorListItem = {
  name: string;
  args?: any[];
};

export type ContentItem<T = any> = {
  name: string;
  type: ContentItemType | string;
  content: T;
  status: ContentItemStatus;
};

export type ContentLoader = <T>(...args: any[]) => Promise<T>;

export type ContentLoaderMap = {
  [key in ContentItemType | string]: ContentLoader;
};

export type ContentProcessor = <T = any>(
  content: Record<string, ContentItem>,
  item: ContentItem<T>,
  ...args: any[]
) => Promise<void>;

export type ContentProcessorMap = {
  [key: string]: ContentProcessor;
};

const defaultContentLoaders: ContentLoaderMap = {
  [ContentItemType.JSON]: JSONLoader,
  [ContentItemType.Font]: FontLoader,
  [ContentItemType.Image]: ImageLoader,
  [ContentItemType.Audio]: AudioLoader,
  [ContentItemType.Text]: TextLoader,
};

const defaultContentProcessors: ContentProcessorMap = {
  imageName: ImageNameProcessor,
};

async function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function clamp(a: number, min = 0, max = 1) {
  return a < min ? min : (a > max ? max : a);
}

function randomBetween(min: number, max: number) {
  return Math.random() * (max - min) + min;
}

const MIN_SLEEP_TIME = 1000;
const MAX_SLEEP_TIME = 3000;

export default class ContentManager {
  private static instance: ContentManager | undefined;

  private static readonly defaultOptions: ContentManagerOptions = {
    loaders: defaultContentLoaders,
    processors: defaultContentProcessors,
  };

  private options: ContentManagerOptions;

  private currentContentList: ContentListItem[] = [];

  private currentProgress: number = 0;

  private currentTotalProgress: number = 0;

  private content: Record<string, ContentItem> = {};

  private status: ContentManagerStatus = ContentManagerStatus.Idle;

  private constructor(options?: Partial<ContentManagerOptions>) {
    this.options = Object.assign(
      {},
      ContentManager.defaultOptions,
      options ?? {},
      {
        loaders: {
          ...ContentManager.defaultOptions.loaders,
          ...(options?.loaders ?? {}),
        },
        processors: {
          ...(ContentManager.defaultOptions.processors ?? {}),
          ...(options?.processors ?? {}),
        },
      },
    );
  }

  /**
   * Initialise the content manager and provide configuration options
   */
  public static initialise(options?: Partial<ContentManagerOptions>) {
    if (ContentManager.instance !== undefined) {
      throw new Error('Content manager already initialised');
    }

    ContentManager.instance = new ContentManager(options);
  }

  public static dispose() {
    if (ContentManager.instance === undefined) {
      throw new Error('Content manager not initialised');
    }

    delete ContentManager.instance;
  }

  private static getInstance(): ContentManager {
    if (ContentManager.instance === undefined) {
      throw new Error('Content manager not properly initialised');
    }

    return ContentManager.instance;
  }

  /**
   * Current loading progress, represented as a unit scalar [0, 1]
   */
  public static get progress(): number {
    const instance = ContentManager.getInstance();

    return instance.getProgress();
  }

  /**
   * Current content manager status
   */
  public static get status(): ContentManagerStatus {
    const instance = ContentManager.getInstance();

    return instance.status;
  }

  private getProgress(): number {
    if (!this.currentContentList.length || this.currentTotalProgress === 0) {
      return 1;
    }

    return clamp(this.currentProgress / this.currentTotalProgress);
  }

  /**
   * Load content items
   *
   * Existing content items will be retained, and any content items which
   * already exist will be re-loaded
   */
  public static async load(items?: ContentListItem[]): Promise<void> {
    if (!items || items.length === 0) {
      return;
    }

    const instance = ContentManager.getInstance();

    if (
      !instance.options.loaders ||
      Object.keys(instance.options.loaders).length === 0
    ) {
      throw new Error('No content loaders defined');
    }

    instance.currentContentList = items;

    // Calculate how many tasks we need to perform
    const countTotalToLoad = items.length;
    const countTotalToProcess = items.reduce(
      (a, c) => a + (c.processors ?? []).length,
      0
    );

    instance.currentProgress = 0;
    instance.currentTotalProgress = countTotalToLoad + countTotalToProcess;

    // Load items
    instance.status = ContentManagerStatus.Loading;
    for (const item of items) {
      if (!(item.type in instance.options.loaders)) {
        throw new Error(`No content loader defined for type "${item.type}"`);
      }

      if (instance.options.simulateSlowLoading) {
        await sleep(randomBetween(
          instance.options.slowLoadingTimeMin ?? MIN_SLEEP_TIME,
          instance.options.slowLoadingTimeMax ?? MAX_SLEEP_TIME
        ));
      }

      const contentItem = {
        name: item.name,
        type: item.type,
        content: null,
        status: ContentItemStatus.Loading,
      };
      instance.content[item.name] = contentItem;
      contentItem.content = await instance.options.loaders[item.type](
        ...item.args
      );

      contentItem.status = ContentItemStatus.Loaded;
      instance.currentProgress++;
    }

    // Process items
    instance.status = ContentManagerStatus.Processing;
    for (const item of items) {
      if (!item.processors || item.processors.length === 0) {
        continue;
      }

      if (
        !instance.options.processors ||
        Object.keys(instance.options.processors).length === 0
      ) {
        throw new Error('No content processors defined');
      }

      const contentItem = instance.content[item.name];

      if (!contentItem) {
        // We should never reach this point; the item will have been loaded
        // and added to the instance's content dictionary... but just in case
        throw new Error(
          `Cannot find item with name "${item.name}"`
        );
      }

      if (instance.options.simulateSlowProcessing) {
        await sleep(randomBetween(
          instance.options.slowProcessingTimeMin ?? MIN_SLEEP_TIME,
          instance.options.slowProcessingTimeMax ?? MAX_SLEEP_TIME
        ));
      }

      contentItem.status = ContentItemStatus.Processing;

      for (const processor of item.processors) {
        if (!(processor.name in instance.options.processors)) {
          throw new Error(
            `No content processor defined with name "${processor.name}"`
          );
        }

        await instance.options.processors[processor.name](
          instance.content,
          contentItem,
          ...(processor.args ?? [])
        );

        instance.currentProgress++;
      }

      contentItem.status = ContentItemStatus.Processed;
    }

    instance.status = ContentManagerStatus.Ready;
  }

  /**
   * Retrieve a content item by name
   */
  public static get<T>(name: string): T | undefined {
    const instance = ContentManager.getInstance();

    if (!(name in instance.content)) {
      if (instance.options.throwOnNotFound) {
        throw new Error(`Content item "${name}" not found`);
      }
      return undefined;
    }

    return instance.content[name].content as T;
  }
}
