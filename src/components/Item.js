import { useState } from 'react';
import downArrow from '../assets/down-arrow.svg';
import upArrow from '../assets/up-arrow.svg';

const Item = (props) => {
  const [showDetails, setShowDetails] = useState(false);

  //render different arrow icons depends on component state
  const arrowIcon = showDetails ? upArrow : downArrow;

  const toggleShowDetailsHandler = () =>
    setShowDetails((curState) => !curState);

  //render different class list depens on component state
  let detailsClasses = ['item-description'];
  showDetails && detailsClasses.push('full-description');

  return (
    <div className="item">
      <img className="item-img" src={props.img} alt="item" />
      <div className={detailsClasses.join(' ')}>
        <span
          className="item-description__showBtn"
          onClick={toggleShowDetailsHandler}
        >
          <img src={arrowIcon} alt="arrow icon" />
        </span>
        <h3>{props.title}</h3>
        {showDetails && (
          <>
            <p>{props.desc}</p>
            <button className="btn btn-wide">Go for it!</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Item;
