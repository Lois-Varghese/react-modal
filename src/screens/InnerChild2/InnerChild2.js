import React, {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '../../common/Button/Button';
import {AppContext} from '../../util/AppContext';

const InnerChild2 = () => {
  const {handleButtonClick} = useContext(AppContext);
  const navigate = useNavigate();

  return (
    <div className="childWrapper child2 normalText">
      <p>Child 2</p>
      <div className="buttonWrapper">
        <Button onClick={() => handleButtonClick(2)}>Open Modal</Button>
      </div>
      <div className="buttonWrapper">
        <Button onClick={() => navigate('/child3')}>Child 3</Button>
      </div>
    </div>
  );
};

export default InnerChild2;
