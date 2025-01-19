import cn from 'classnames';
import { FilterButton } from 'components/FilterButton';
import { Filter, FilterFunction } from 'types';
import styles from './Header.module.scss';

interface HeaderProps {
  filter: Filter;
  setFilter: FilterFunction;
  className?: string;
}

export function Header({ filter, setFilter, className }: Readonly<HeaderProps>) {
  return (
    <header className={cn(styles.Header, className)}>
      <ul className={styles.Header__Filters}>
        <li>
          <FilterButton text="Все котики" name="all" filter={filter} setFilter={setFilter} />
        </li>
        <li>
          <FilterButton text="Любимые котики" name="favorite" filter={filter} setFilter={setFilter} />
        </li>
      </ul>
    </header>
  );
}
