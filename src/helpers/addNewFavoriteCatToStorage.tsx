import { Cat } from 'types';

export function addNewFavoriteCatToStorage(catObject: Cat) {
  const storagedFavoriteCats = localStorage.getItem('favoriteCats');
  const newCat = { ...catObject, favorite: true };

  if (storagedFavoriteCats) {
    const newFavoriteCats = [...JSON.parse(storagedFavoriteCats), newCat];
    localStorage.setItem('favoriteCats', JSON.stringify(newFavoriteCats));
  } else {
    localStorage.setItem('favoriteCats', JSON.stringify([newCat]));
  }
}
