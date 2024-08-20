import {
  Link as RouterLink,
  LinkProps as RouterLinkProps,
} from 'react-router-dom';
import styles from './link.module.scss';

// Обновленный интерфейс для использования LinkProps из react-router-dom
export interface CustomLinkProps extends RouterLinkProps {
  label?: string;
  theme?: 'light' | 'dark';
}

function Link({ label = '', theme = 'light', ...other }: CustomLinkProps) {
  return (
    <RouterLink
      className={`${styles.link} ${styles[`link--${theme}`]}`}
      {...other}
    >
      {label}
    </RouterLink>
  );
}

export default Link;
