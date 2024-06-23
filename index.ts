import {
  AudioLoader,
  FontLoader,
  ImageLoader,
  JSONLoader,
  TextLoader,
} from './content-loaders';

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
  Loaded
}

export enum ContentItemStatus {
  Idle = 0,
  Loading,
  Loaded
}

export type ContentListItem = {
  name: string;
  type: ContentItemType | string;
  args: any[];
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

const defaultContentLoaders: ContentLoaderMap = {
  [ContentItemType.JSON]: JSONLoader,
  [ContentItemType.Font]: FontLoader,
  [ContentItemType.Image]: ImageLoader,
  [ContentItemType.Audio]: AudioLoader,
  [ContentItemType.Text]: TextLoader,
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

const MIN_SIMULATED_LOADING_TIME = 1000;

const MAX_SIMULATED_LOADING_TIME = 3000;

export default class ContentManager {
  private static instance: ContentManager;

  private static readonly defaultOptions: ContentManagerOptions = {
    loaders: defaultContentLoaders,
  };

  private options: ContentManagerOptions;

  private currentContentList: ContentListItem[] = [];

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
    if (!this.currentContentList.length) {
      return 1;
    }

    const names = this.currentContentList.map(item => item.name);
    const loaded = Object.entries(this.content).filter(
      ([name, item]) => names.includes(name) && item.status === ContentItemStatus.Loaded
    );

    return clamp(loaded.length / this.currentContentList.length);
  }

  /**
   * Load content items
   *
   * Existing content items will be retained, and any content items that already exist
   * will be re-loaded
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
    instance.status = ContentManagerStatus.Loading;

    for (const item of items) {
      if (instance.options.simulateSlowLoading) {
        await sleep(randomBetween(
          instance.options.slowLoadingTimeMin ?? MIN_SIMULATED_LOADING_TIME,
          instance.options.slowLoadingTimeMax ?? MAX_SIMULATED_LOADING_TIME
        ));
      }

      if (!(item.type in instance.options.loaders)) {
        throw new Error(`No content loader defined for type "${item.type}"`);
      }

      const contentItem = {
        name: item.name,
        type: item.type,
        content: null,
        status: ContentItemStatus.Loading,
      };
      instance.content[item.name] = contentItem;
      contentItem.content = await instance.options.loaders[item.type](...item.args);
      contentItem.status = ContentItemStatus.Loaded;
    }

    instance.status = ContentManagerStatus.Loaded;
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
