import { Cat } from 'types';

export function getStorageFavoriteCats(): Cat[] {
  const storagedFavoriteCats = localStorage.getItem('favoriteCats');

  if (storagedFavoriteCats) {
    return JSON.parse(storagedFavoriteCats);
  }

  return [];
}
