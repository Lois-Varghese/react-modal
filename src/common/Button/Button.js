import React from 'react';
import './Button.scss';

const Button = ({children, onClick, ...props}) => {
  return (
    <button type="button" onClick={onClick} className="btn" {...props}>
      {children}
    </button>
  );
};

export default Button;
