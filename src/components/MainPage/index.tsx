import React from 'react';
import Footer from '../Footer';
import Header from '../Header';
import ItemsList from '../ItemsList';
import style from './MainPage.module.scss';

const MainPage = () => {
  return (
    <div className={style.page_wrapper}>
      <Header />
      <ItemsList />
      <Footer />
    </div>
  );
};

export default MainPage;
