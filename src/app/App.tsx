import { useEffect, useState } from 'react';
import { apiGetCats } from 'api/apiGetCats';
import { ButtonMore } from 'components/ButtonMore';
import { CatList } from 'components/CatList';
import { Header } from 'components/Header';
import { Main } from 'components/Main';
import { addNewFavoriteCatToStorage } from 'helpers/addNewFavoriteCatToStorage';
import { getStorageFavoriteCats } from 'helpers/getStorageFavoriteCats';
import { isFavoriteCat } from 'helpers/isFavoriteCat';
import { removeFavoriteCatFromStorage } from 'helpers/removeFavoriteCatFromStorage';
import { Cat, Filter, HandleAddFavorite, HandleDeleteFavorite, StatusApi } from 'types';

export function App() {
  const [cats, setCats] = useState<Cat[]>([]);
  const [favoriteCats, setFavoriteCats] = useState<Cat[]>(getStorageFavoriteCats());
  const [filter, setFilter] = useState<Filter>('all');
  const [statusApi, setStatusApi] = useState<StatusApi>('loading');

  const toggleStateFavoriteCat = (catObject: Cat) => {
    setCats(prevState =>
      prevState.map(cat => {
        if (cat.id === catObject.id) {
          return {
            ...cat,
            favorite: !catObject.favorite,
          };
        } else {
          return cat;
        }
      }),
    );
  };

  const handleAddFavorite: HandleAddFavorite = catObject => {
    setFavoriteCats(prevState => [...prevState, { ...catObject, favorite: true }]);
    toggleStateFavoriteCat(catObject);
    addNewFavoriteCatToStorage(catObject);
  };

  const handleDeleteFavorite: HandleDeleteFavorite = catObject => {
    setFavoriteCats(prevState => prevState.filter(cat => cat.id !== catObject.id));
    toggleStateFavoriteCat(catObject);
    removeFavoriteCatFromStorage(catObject);
  };

  const loadCats = () => {
    setStatusApi('loading');
    apiGetCats()
      .then(data => {
        const newCats = data.map(cat => ({
          id: cat.id,
          url: cat.url,
          favorite: isFavoriteCat(cat.id, favoriteCats),
        }));
        setCats(prevState => [...prevState, ...newCats]);
        setStatusApi('success');
      })
      .catch(err => {
        setStatusApi('error');
        console.error(err);
      });
  };

  const handleScroll = () => {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight) {
      loadCats();
    }
  };

  useEffect(() => {
    loadCats();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Header filter={filter} setFilter={setFilter} />
      <Main>
        <CatList
          cats={filter === 'favorite' ? favoriteCats : cats}
          handleAddFavorite={handleAddFavorite}
          handleDeleteFavorite={handleDeleteFavorite}
        />
        {filter === 'all' && <ButtonMore onClick={loadCats} statusApi={statusApi} />}
      </Main>
    </>
  );
}
