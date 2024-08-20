import './index.scss';
import './variables.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import { ThemeProvider } from './hooks/useTheme/ThemeContext';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';

import NotAuthMainPage from './pages/NotAuthMainPage/NotAuthMainPage';

function App() {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<NotAuthMainPage />} />
        </Routes>
        <Footer />
      </Router>
    </ThemeProvider>
  );
}

export default App;
