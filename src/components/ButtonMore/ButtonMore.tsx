import cn from 'classnames';
import { StatusApi } from 'types';
import styles from './ButtonMore.module.scss';

interface ButtonMoreProps {
  onClick: VoidFunction;
  statusApi: StatusApi;
  className?: string;
}

export function ButtonMore({ onClick, statusApi, className }: Readonly<ButtonMoreProps>) {
  let buttonText: string;

  switch (statusApi) {
    case 'success':
      buttonText = 'Загрузить еще';
      break;
    case 'error':
      buttonText = 'Ошибка загрузки. Попробуйте еще раз.';
      break;
    case 'loading':
      buttonText = 'Загружаем котиков...';
      break;
  }

  return (
    <button className={cn(styles.buttonMore, className)} onClick={onClick}>
      {buttonText}
    </button>
  );
}
