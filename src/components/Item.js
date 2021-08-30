import { useState } from 'react';
import downArrow from '../assets/down-arrow.svg';
import upArrow from '../assets/up-arrow.svg';

const Item = (props) => {
  const [showDetails, setShowDetails] = useState(false);
  const arrowIcon = showDetails ? upArrow : downArrow;

  const toggleShowDetailsHandler = () =>
    setShowDetails((curState) => !curState);

  let detailsClasses = ['item-description'];
  showDetails && detailsClasses.push('full-description');

  return (
    <div className="item">
      <img
        className="item-img"
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/567707/dog.png"
        alt="item"
      />
      <div className={detailsClasses.join(' ')}>
        <span
          className="item-description__showBtn"
          onClick={toggleShowDetailsHandler}
        >
          <img src={arrowIcon} alt="arrow icon" />
        </span>
        <h3>Doggo Dog</h3>
        {showDetails && (
          <>
            <p>
              Sweet, friendly, well-socialized, affectionate. Loves other dogs
              and is very active and playful with other dogs.
            </p>
            <button className="btn btn-wide">Go for it!</button>
          </>
        )}
      </div>
    </div>
  );
};

export default Item;
