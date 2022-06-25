import React, { createContext } from 'react';
import { myUsers, UsersContext } from '../UseCallback/components/context';
import ChildOne from './components/ChildOne';

const UseContext = () => {
  return (
    <UsersContext.Provider value={myUsers}>
      <ChildOne />
    </UsersContext.Provider>
  );
};

export default UseContext;
