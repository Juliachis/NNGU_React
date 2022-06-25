import React, { useCallback, useEffect, useRef, useState } from 'react';
import style from './UseRef.module.scss';

const UseRef = () => {
  // Пример 1  ================

  //   const inputRef = useRef<HTMLInputElement>(null);

  //   useEffect(() => {
  //     inputRef.current?.focus();
  //   }, []);

  //   const handleBtnClick = () => {
  //     if (inputRef.current) {
  //       inputRef.current.style.color = 'red';
  //     }
  //   };

  //   return (
  //     <div>
  //       <input type="text" ref={inputRef} />
  //       <button type="button" onClick={handleBtnClick}>
  //         Focus
  //       </button>
  //     </div>
  //   );

  // Пример 2 ================
  const [number, setNumber] = useState([1, 2, 3, 4, 5, 6, 7, 8]);

  const ulRef = useRef<HTMLUListElement>(null);
  const numbersRef = useRef<number[]>(number);

  const handleAddNum = () => {
    setNumber((prev) => [...prev, prev[prev.length - 1] + 1]);
  };

  numbersRef.current = number;

  const handleScroll = useCallback(() => console.log('Скролл', numbersRef.current), []);

  const handleSub = () => {
    ulRef.current?.addEventListener('scroll', handleScroll);
  };

  const handleUnSub = () => {
    ulRef.current?.removeEventListener('scroll', handleScroll);
  };

  return (
    <div>
      <div className={style.btns_wrapper}>
        <button type="button" onClick={handleAddNum}>
          Add Number
        </button>
        <button type="button" onClick={handleSub}>
          Sub on scroll
        </button>
        <button type="button" onClick={handleUnSub}>
          Unsub from scroll
        </button>
      </div>
      <ul ref={ulRef} className={style.numbers_list}>
        {number.map((num, i) => (
          <li className={style.numbers_item} key={`${num + i}`}>
            {num}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UseRef;
