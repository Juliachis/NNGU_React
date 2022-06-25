import React, { FC } from 'react';

interface IProps {
  numbersArray: number[];
}

const ItemsList: FC<IProps> = ({ numbersArray }) => {
  return (
    <div>
      {numbersArray.map((num, i) => {
        return <div key={`${num + i}`}>{num}</div>;
      })}
    </div>
  );
};

export default ItemsList;
