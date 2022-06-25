import { createContext } from 'react';

export const myUsers = [
  { id: 1, name: 'vasya' },
  { id: 2, name: 'petya' },
  { id: 3, name: 'masha' },
];

export const UsersContext = createContext(myUsers);
