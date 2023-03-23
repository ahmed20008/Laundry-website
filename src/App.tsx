import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header, Footer } from './components';
import MainPage from './components/MainPage/MainPage';

const App: React.FC = () => {
  return (
    <>
      <Header />
      <MainPage />
      <Footer />
    </>
  );
};

export default App;
