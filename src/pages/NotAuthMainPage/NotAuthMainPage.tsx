import { useNavigate } from 'react-router-dom';
import styles from './notAuthMainPage.module.scss';

import CardList from '../../ui-components/CardList/CardList';

import { useThemeContext } from '../../hooks/useTheme/ThemeContext';

import type { IArtistStatic } from '../../models/IArtists';
import type { CardProps } from '../../ui-components/Card/Card';

import artistsApi from '../../api/artistsAPI';

export default function NotAuthMainPage() {
  const { theme } = useThemeContext();
  const { data, isLoading /* , error */ } = artistsApi.useGetArtistsQuery({});

  const navigate = useNavigate();

  const handleClick = (id: string) => {
    navigate(`/artist/${id}`);
  };

  const cards: CardProps[] = data?.map((artist: IArtistStatic) => ({
    id: artist.mainPainting._id,
    name: artist.mainPainting.name,
    yearOfCreation: artist.mainPainting.yearOfCreation,
    image: artist.mainPainting.image,
    onClick: () => handleClick(artist._id),
  }));

  return (
    <main
      className={`${styles.noAuthMainPage} ${styles[`noAuthMainPage--${theme}`]}`}
    >
      <div className="container">
        <CardList cards={cards} isLoading={isLoading} theme={theme} />
      </div>
    </main>
  );
}
