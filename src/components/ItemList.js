import { useState } from 'react';
import Item from './Item';

const ItemsList = (props) => {
  const [isFiltered, setIsFiltered] = useState(false);
  const filterDublicatesHandler = () => setIsFiltered((curState) => !curState);

  let items = [];
  let filteredItems = [];

  if (isFiltered) {
    //create arrays of id
    const itemsIds = [];
    props.items.forEach((item) => {
      itemsIds.push(item.id);
    });

    // get unique ids
    const uniqueIds = itemsIds.filter((item, index) => {
      return itemsIds.indexOf(item) === index;
    });
    //create new array with unique items
    uniqueIds.forEach((item) => {
      let uniqueItem = props.items.find((i) => i.id === item);
      filteredItems.push(uniqueItem);
    });
  } else {
    filteredItems = [...props.items];
  }

  //create dynamic list with items from API
  if (props.items.length > 0) {
    items = filteredItems.map((item) => {
      return (
        <Item
          key={item.id + Math.random()}
          title={item.title}
          desc={item.description}
          img={item.image}
        />
      );
    });
  }

  return (
    <section className="container">
      {items.length === 0 && <h2> Please choose the category to see items</h2>}
      <div>
        <label htmlFor="uniqueItems">Filter duplicated</label>
        <input
          type="checkbox"
          id="uniqueItems"
          onChange={filterDublicatesHandler}
        />
      </div>
      <ul className="items-list">{items}</ul>
    </section>
  );
};

export default ItemsList;
