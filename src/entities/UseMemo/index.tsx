import React, { useState } from 'react';
import Counter from './components/Counter';
import IsTen from './components/IsTen';
import ItemsList from './components/ItemsList';

const UseMemo = () => {
  // Пример 1 ============================================
  const [counter1, setCounter1] = useState(0);
  const [counter2, setCounter2] = useState(0);

  const handleCounter1 = () => setCounter1((prev) => prev + 1);
  const handleCounter2 = () => setCounter2((prev) => prev + 1);

  return (
    <div>
      <button type="button" onClick={handleCounter1}>
        Увеличить счетчик 1
      </button>
      <Counter value={counter1} />
      <hr />
      <button type="button" onClick={handleCounter2}>
        Увеличить счетчик 2
      </button>
      <Counter value={counter2} />
      <IsTen value={counter2} />
    </div>
  );
};

export default UseMemo;
