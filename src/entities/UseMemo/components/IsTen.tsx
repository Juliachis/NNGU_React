import React, { FC, memo, useMemo } from 'react';

interface IProps {
  value: number;
}

const IsTen: FC<IProps> = ({ value }) => {
  console.log('IsTen rerendered');

  const loop = () => {
    let i = 0;
    while (i < 600000000) i++;
  };

  const isTen = () => {
    return value === 10 ? 'Value равен 10' : 'Value не равен 10';
  };

  useMemo(loop, [isTen()]);

  return <div>{isTen()}</div>;
};

export default memo(IsTen, (_, nextProps) => {
  return true;
});
