import { FOOD, PETS, PLANTS } from '../shared/glovalVars';

const Header = (props) => {
  const changeCategoryHandler = (e) =>
    props.change(e.target.childNodes[0].data);

  let btnClasses = ['btn'];
  btnClasses.push('btn-active');

  return (
    <header className="header container">
      <h1>Pets</h1>
      <nav className="header__nav">
        <button
          onClick={changeCategoryHandler}
          className={props.category === PETS ? 'btn btn-active' : 'btn'}
        >
          {PETS}
        </button>
        <button
          onClick={changeCategoryHandler}
          className={props.category === FOOD ? 'btn btn-active' : 'btn'}
        >
          {FOOD}
        </button>
        <button
          onClick={changeCategoryHandler}
          className={props.category === PLANTS ? 'btn btn-active' : 'btn'}
        >
          {PLANTS}
        </button>
      </nav>
    </header>
  );
};

export default Header;
