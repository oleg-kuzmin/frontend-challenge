import cn from 'classnames';
import styles from './Main.module.scss';

interface MainProps {
  children: React.ReactNode;
  className?: string;
}

export function Main({ children, className }: Readonly<MainProps>) {
  return <main className={cn(styles.Main, className)}>{children}</main>;
}
