import React, { FC } from 'react';
import style from './Button.module.scss';

interface IButton {
  btnText: string;
  handleClick: () => void;
}

const Button: FC<IButton> = ({ btnText, handleClick }) => {
  return (
    <button type="button" className={style.button} onClick={handleClick}>
      {btnText}
    </button>
  );
};

export default Button;
