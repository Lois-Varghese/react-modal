import React, {useContext} from 'react';

import Button from '../../common/Button/Button';
import {AppContext} from '../../util/AppContext';

const InnerChild3 = () => {
  const {handleButtonClick} = useContext(AppContext);
  return (
    <div>
      <span className="title">Child Screen 3</span>
      <div className="mainWrapper">
        <div className="childWrapper child3 normalText">
          <p>Child 3</p>
          <Button onClick={() => handleButtonClick(1)}>Open Modal</Button>
        </div>
      </div>
    </div>
  );
};

export default InnerChild3;
