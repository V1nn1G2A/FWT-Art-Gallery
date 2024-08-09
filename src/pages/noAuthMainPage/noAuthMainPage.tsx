import styles from './noAuthMainPage.module.scss';

import PictureList from '../../UI/PictureList/PictureList';

import { useThemeContext } from '../../hooks/useTheme/ThemeContext';

import type { PictureCardProps } from '../../UI/PictureCard/PictureCard';

export default function NoAuthMainPage() {
  const { theme } = useThemeContext();

  const defaultProps: PictureCardProps = {
    title: 'The ninth wave',
    subTitle: '1703',
    image: 'https://test-front.framework.team/images/The_ninth_wave.jpeg',
    onClick: () => {},
    theme,
  };

  const pictures = [
    defaultProps,
    defaultProps,
    defaultProps,
    defaultProps,
    defaultProps,
    defaultProps,
  ];
  return (
    <div
      className={`${styles.noAuthMainPage} ${styles[`noAuthMainPage--${theme}`]}`}
    >
      <PictureList pictures={pictures} />
    </div>
  );
}
