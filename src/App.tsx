import './index.scss';
import './variables.scss';

import React from 'react';

import { BrowserRouter as Router } from 'react-router-dom';

import { ThemeProvider } from './hooks/useTheme/ThemeContext';

import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Main from './components/Main/Main';

const App: React.FC = () => {
  return (
    <ThemeProvider>
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    </ThemeProvider>
  );
};

export default App;
