import './App.css';
import './index.scss';
import './variables.scss';
import useTheme from './hooks/useTheme';
import PictureList from './UI/PictureList/PictureList';
import type { PictureCardProps } from './UI/PictureCard/PictureCard';

function App() {
  const { currentTheme, toggleTheme } = useTheme();

  // тестовые пропсы, удалить при подключении запросов
  const defaultProps: PictureCardProps = {
    title: 'The ninth wave',
    subTitle: '1703',
    image: 'https://test-front.framework.team/images/The_ninth_wave.jpeg',
    onClick: () => {},
    theme: currentTheme,
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
    <div className="container">
      <button type="button" onClick={toggleTheme}>
        Toggle Theme
      </button>
      <PictureList pictures={pictures} />
    </div>
  );
}

export default App;
