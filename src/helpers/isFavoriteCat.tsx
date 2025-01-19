import { Cat } from 'types';

export const isFavoriteCat = (id: string, arrayCats: Cat[]) => {
  const findedIndex = arrayCats.findIndex(catObject => {
    return catObject.id === id;
  });
  return findedIndex !== -1;
};
