import { ContentLoader } from '../index';

export const TextLoader: ContentLoader = async <T = string>(
  urlOrText: any
): Promise<T> => {
  if (urlOrText.startsWith('http')) {
    return new Promise<T>((resolve, reject) => {
      window.fetch(urlOrText, {
        method: 'GET',
        headers: {
          'content-type': 'text/plain;charset=UTF-8',
        },
      })
        .then(response => {
          return response.text();
        })
        .then(data => {
          resolve(data as T);
        })
        .catch(() => {
          reject(`Error loading text "${urlOrText}"`);
        });
    });
  }
  return urlOrText.toString();
};
