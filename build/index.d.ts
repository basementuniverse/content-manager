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
export declare enum ContentItemType {
    JSON = "json",
    Font = "font",
    Image = "image",
    Audio = "audio",
    Text = "text"
}
export declare enum ContentManagerStatus {
    Idle = "idle",
    Loading = "loading",
    Processing = "processing",
    Ready = "ready"
}
export declare enum ContentItemStatus {
    Idle = "idle",
    Loading = "loading",
    Loaded = "loaded",
    Processing = "processing",
    Processed = "processed"
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
export type ContentProcessor = <T = any>(content: Record<string, ContentItem>, item: ContentItem<T>, ...args: any[]) => Promise<void>;
export type ContentProcessorMap = {
    [key: string]: ContentProcessor;
};
export default class ContentManager {
    private static instance;
    private static readonly defaultOptions;
    private options;
    private currentContentList;
    private currentProgress;
    private currentTotalProgress;
    private content;
    private status;
    private constructor();
    /**
     * Initialise the content manager and provide configuration options
     */
    static initialise(options?: Partial<ContentManagerOptions>): void;
    static dispose(): void;
    private static getInstance;
    /**
     * Current loading progress, represented as a unit scalar [0, 1]
     */
    static get progress(): number;
    /**
     * Current content manager status
     */
    static get status(): ContentManagerStatus;
    private getProgress;
    /**
     * Load content items
     *
     * Existing content items will be retained, and any content items which
     * already exist will be re-loaded
     */
    static load(items?: ContentListItem[]): Promise<void>;
    /**
     * Retrieve a content item by name
     */
    static get<T>(name: string): T | undefined;
}
