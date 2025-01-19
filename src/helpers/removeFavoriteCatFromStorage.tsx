import { Cat } from 'types';

export function removeFavoriteCatFromStorage(catObject: Cat) {
  const storagedFavoriteCats = localStorage.getItem('favoriteCats');

  if (storagedFavoriteCats) {
    const favoriteCats = JSON.parse(storagedFavoriteCats);
    const newFavoriteCats = favoriteCats.filter((cat: Cat) => cat.id !== catObject.id);
    localStorage.setItem('favoriteCats', JSON.stringify(newFavoriteCats));
  }
}
