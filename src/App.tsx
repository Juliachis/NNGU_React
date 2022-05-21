import React from 'react';
import './assets/scss/normalize.scss';
import PageLayout from './layouts/PageLayout';
import UsersPage from './entities/UsersPage';

const App = () => {
  return (
    <PageLayout>
      <UsersPage />
    </PageLayout>
  );
};

export default App;
