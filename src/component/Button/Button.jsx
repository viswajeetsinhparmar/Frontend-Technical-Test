import React from 'react';
import './Button.css';

const Button = (props) => {
  const {
    label,
    onClick,
    type
  } = props;

  return (
    <button
      type={type}
      className="btn"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;