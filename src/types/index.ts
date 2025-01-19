export type StatusApi = 'loading' | 'success' | 'error';
export type Filter = 'all' | 'favorite';
export type FilterFunction = React.Dispatch<React.SetStateAction<Filter>>;
export type HandleAddFavorite = (catObject: Cat) => void;
export type HandleDeleteFavorite = (catObject: Cat) => void;

export interface CatResponce {
  id: string;
  url: string;
}

export interface Cat {
  id: string;
  url: string;
  favorite: boolean;
}
