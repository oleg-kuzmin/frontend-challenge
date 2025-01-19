import cn from 'classnames';
import { Filter, FilterFunction } from 'types';
import styles from './FilterButton.module.scss';

interface FilterButtonProps {
  name: Filter;
  filter: Filter;
  text: string;
  setFilter: FilterFunction;
  className?: string;
}

export function FilterButton({ name, filter, text, setFilter, className }: Readonly<FilterButtonProps>) {
  return (
    <button
      className={cn(styles.FilterButton, { [styles.FilterButton_Active]: name === filter }, className)}
      onClick={() => setFilter(name)}
    >
      {text}
    </button>
  );
}
