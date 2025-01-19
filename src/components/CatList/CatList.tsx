import cn from 'classnames';
import { CatCard } from 'components/CatCard';
import { Cat, HandleAddFavorite, HandleDeleteFavorite } from 'types';
import styles from './CatList.module.scss';

interface CatListProps {
  cats: Cat[];
  handleAddFavorite: HandleAddFavorite;
  handleDeleteFavorite: HandleDeleteFavorite;
  className?: string;
}

export function CatList({ cats, handleAddFavorite, handleDeleteFavorite, className }: Readonly<CatListProps>) {
  const catsCards = cats.map((catObject, index) => {
    return (
      <CatCard
        catObject={catObject}
        key={catObject.id + index}
        handleAddFavorite={handleAddFavorite}
        handleDeleteFavorite={handleDeleteFavorite}
      />
    );
  });

  return <ul className={cn(styles.CatList, className)}>{catsCards}</ul>;
}
