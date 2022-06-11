import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';

interface IProps {
  limit: number;
  itemsAmount: number;
  paginate: (page: number) => void;
}

const Pagination: FC<IProps> = ({ limit, itemsAmount, paginate }) => {
  const pagesAmount = Math.ceil(itemsAmount / limit);
  const pagesArray = [];

  const navigate = useNavigate();

  for (let i = 1; i <= pagesAmount; i++) {
    pagesArray.push(i);
  }

  return (
    <div>
      {pagesArray.map((page) => (
        <button
          key={`keay${page}`}
          type="button"
          onClick={() => {
            navigate(`?page=${page}`);
            paginate(page);
          }}>
          {page}
        </button>
      ))}
    </div>
  );
};

export default Pagination;
