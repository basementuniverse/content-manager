import { ContentLoader } from '../index';

export const JSONLoader: ContentLoader = async <T>(
  urlOrData: any
): Promise<T> => {
  if (typeof urlOrData === 'string' && urlOrData.startsWith('http')) {
    return new Promise<T>((resolve, reject) => {
      window
        .fetch(urlOrData, {
          method: 'GET',
          headers: {
            'content-type': 'application/json;charset=UTF-8',
          },
        })
        .then(response => {
          return response.json();
        })
        .then(json => {
          resolve(json);
        })
        .catch(() => {
          reject(`Error loading json "${urlOrData}"`);
        });
    });
  }
  return urlOrData as T;
};
