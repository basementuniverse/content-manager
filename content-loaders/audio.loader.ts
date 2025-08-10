import { ContentLoader } from '../index';

export const AudioLoader: ContentLoader = async (url: string): Promise<any> => {
  return new Promise<HTMLAudioElement>((resolve, reject) => {
    const audio = new Audio(url);
    audio.addEventListener('loadeddata', () => {
      resolve(audio as any);
    });
    audio.addEventListener('error', () => {
      reject(`Error loading audio "${url}"`);
    });
  });
};
