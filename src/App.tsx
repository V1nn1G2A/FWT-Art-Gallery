import './index.scss';
import './variables.scss';

import { ThemeProvider } from './hooks/useTheme/ThemeContext';

import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import NoAuthMainPage from './pages/noAuthMainPage/noAuthMainPage';

function App() {
  return (
    <ThemeProvider>
      <Header />
      <NoAuthMainPage />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
