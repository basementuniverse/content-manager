import { ContentProcessor } from '../';

export type ImageNameProcessorOptions = {
  imageNameFieldName: string;
  imageFieldName: string;
};

const defaultOptions: ImageNameProcessorOptions = {
  imageNameFieldName: 'imageName',
  imageFieldName: 'image',
};

export const ImageNameProcessor: ContentProcessor = async (
  content,
  item,
  options?: Partial<ImageNameProcessorOptions>
): Promise<void> => {
  const actualOptions = Object.assign({}, defaultOptions, options ?? {});

  if (typeof item.content === 'object' && item.content !== null) {
    const processObject = (o: object) => {
      for (const key in o) {
        if (key === actualOptions.imageNameFieldName) {
          const imageName = (o as any)[key];
          const imageItem = content[imageName]?.content;
          if (imageItem) {
            (o as any)[actualOptions.imageFieldName] = imageItem;
            delete (o as any)[key];
          }
        } else if (
          typeof (o as any)[key] === 'object' &&
          (o as any)[key] !== null
        ) {
          processObject((o as any)[key]);
        }
      }
    };

    processObject(item.content);
  }
};
