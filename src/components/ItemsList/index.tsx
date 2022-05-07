import React from 'react';
import Item from '../Item';
import style from './ItemsList.module.scss';

// const ItemsMock = {
//   itemName: 'Ботинки',
//   itemDescription: 'Смотрите, какие потрясающие ботинки',
// };

const ItemsMock = [
  {
    id: 1,
    itemName: 'Ботинки',
    itemDescription: 'Смотрите, какие потрясающие ботинки',
    price: 70000,
  },
  {
    id: 2,
    itemName: 'Шапка',
    itemDescription: 'Очень красивая шапка',
    price: 1000,
  },
  {
    id: 3,
    itemName: 'Платье',
    itemDescription: 'Лучшее платье на свете',
    price: 20000,
  },
  {
    id: 4,
    itemName: 'Пиджак',
    itemDescription: 'Ну очень модный пиджак',
    price: 5000,
  },
];

const ItemsList = () => {
  return (
    <div className={style.items_list_wrapper}>
      <p>Список товаров</p>
      <div className={style.items_list}>
        {ItemsMock.map((item) => {
          const { itemName, itemDescription } = item;
          return <Item name={itemName} description={itemDescription} />;
        })}
        {/* <Item name={ItemsMock.itemName} description={ItemsMock.itemDescription} />
        <Item name={ItemsMock.itemName} description={ItemsMock.itemDescription} />
        <Item name={ItemsMock.itemName} description={ItemsMock.itemDescription} />
         <Item name={ItemsMock.itemName} description={ItemsMock.itemDescription} />  */}
      </div>
    </div>
  );
};

export default ItemsList;
