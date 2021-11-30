import React, {useContext} from 'react';
import Button from '../../common/Button/Button';
import {AppContext} from '../../util/AppContext';
import InnerChild2 from '../InnerChild2/InnerChild2';

const InnerChild1 = () => {
  const {handleButtonClick} = useContext(AppContext);

  return (
    <div>
      <span className="title">Child Screen 1</span>
      <div className="mainWrapper">
        <div className="childWrapper child1 normalText">
          <p>Child 1</p>
          <Button onClick={() => handleButtonClick(3)}>Open Modal</Button>
        </div>
        <InnerChild2 />
      </div>
    </div>
  );
};

export default InnerChild1;
