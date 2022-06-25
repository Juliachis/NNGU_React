import React, { FC, memo } from 'react';

interface IProps {
  value: number;
}

const Counter: FC<IProps> = ({ value }) => {
  console.log('Counter rerendered');
  return <div>{value}</div>;
};

export default memo(Counter);
