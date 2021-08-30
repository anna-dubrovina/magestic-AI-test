import Item from './Item';

const ItemsList = () => {
  let items = [];
  for (let i = 0; i < 6; i++) {
    items.push(<Item key={i}/>);
  }

  return (
    <section className="container">
      <ul className="items-list">{items}</ul>
    </section>
  );
};

export default ItemsList;
