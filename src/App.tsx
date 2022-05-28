import React from 'react';
import './assets/scss/normalize.scss';
import UsersPage from './entities/UsersPage';
import PageLayout from './layouts/PageLayout';
import TestPage from './entities/TestPage';

const App = () => {
  return (
    <PageLayout>
      {/* <UsersPage /> */}
      <TestPage />
    </PageLayout>
  );
};

export default App;
