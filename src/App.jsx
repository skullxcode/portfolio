import React from 'react';
import { ThemeProvider } from './context/ThemeContext';
import TopNavBar from './components/layout/TopNavBar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';

function App() {
  return (
    <ThemeProvider>
      <TopNavBar />
      <Home />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
