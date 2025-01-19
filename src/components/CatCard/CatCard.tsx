import { useState } from 'react';
import cn from 'classnames';
import { Cat, HandleAddFavorite, HandleDeleteFavorite } from 'types';
import styles from './CatCard.module.scss';

interface CatCardProps {
  catObject: Cat;
  handleAddFavorite: HandleAddFavorite;
  handleDeleteFavorite: HandleDeleteFavorite;
  className?: string;
}

export function CatCard({ catObject, handleAddFavorite, handleDeleteFavorite, className }: Readonly<CatCardProps>) {
  const [isLoading, setIsLoading] = useState(true);

  const handleClickButtonLike = () => {
    if (!catObject.favorite) {
      handleAddFavorite(catObject);
    } else {
      handleDeleteFavorite(catObject);
    }
  };

  return (
    <li className={cn(styles.CatCard, className, { [styles.CatCard_Loading]: isLoading })}>
      <img
        className={cn(styles.CatCard__Image, { [styles.CatCard__Image_Loading]: isLoading })}
        src={catObject.url}
        alt="Котик"
        onLoad={() => setIsLoading(false)}
      />
      <div className={styles.CatCard__Bg}></div>
      {!isLoading && (
        <button
          className={cn(styles.CatCard__LikeButton, {
            [styles.CatCard__LikeButton_Active]: catObject.favorite,
          })}
          tabIndex={-1}
          onClick={handleClickButtonLike}
        ></button>
      )}
    </li>
  );
}
