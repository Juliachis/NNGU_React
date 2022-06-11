import React, { FC, useState } from 'react';
import { IUsers } from '../../../interfaces/IUsers';
import Pagination from '../../../shared/Pagination';
import style from '../UsersPage.module.scss';
import UserCard from './UserCard';

interface IProps {
  usersDataAttr: IUsers[];
}

const UsersPageComponent: FC<IProps> = ({ usersDataAttr }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const cardLimit = 3;

  const lastCardIndex = currentPage * cardLimit;
  const firstCardIndex = lastCardIndex - cardLimit;
  const currentCards = usersDataAttr.slice(firstCardIndex, lastCardIndex);

  const paginate = (pageNumber: number) => setCurrentPage(pageNumber);

  return (
    <div>
      <p>Список пользователей:</p>
      <div className={style.user_list}>
        {usersDataAttr.length ? (
          currentCards.map((user) => {
            const { id, name, email } = user;
            return (
              <React.Fragment key={`UserId:${id}`}>
                <UserCard id={id} name={name} email={email} />
              </React.Fragment>
            );
          })
        ) : (
          <div>Пользователи не найдены.</div>
        )}
        <Pagination limit={3} itemsAmount={usersDataAttr.length} paginate={paginate} />
      </div>
    </div>
  );
};

export default UsersPageComponent;
