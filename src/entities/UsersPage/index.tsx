import React, { useEffect, useState } from 'react';
import { usersUrl } from '../../api/constants';
import { IUsers } from '../../interfaces/IUsers';
import UsersPageComponent from './components/UsersPageComponent';

const UsersPage = () => {
  const [usersData, setUsersData] = useState<IUsers[] | null>(null);

  useEffect(() => {
    setTimeout(() => {
      fetch(usersUrl)
        .then((response) => response.json())
        .then((data) => {
          setUsersData(data);
        });
    }, 1500);
  }, []);

  return !usersData ? <div>Загрузка...</div> : <UsersPageComponent usersDataAttr={usersData} />;
};

export default UsersPage;
