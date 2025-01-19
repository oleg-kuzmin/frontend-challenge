import { CatResponce } from 'types';

export async function apiGetCats(): Promise<CatResponce[]> {
  const res = await fetch('https://api.thecatapi.com/v1/images/search?limit=10', {
    headers: {
      'content-type': 'application/json',
    },
  });

  const data = res.ok ? await res.json() : console.error(`Ошибка загрузки данных с сервера: ${res.status}`);
  return data;
}
