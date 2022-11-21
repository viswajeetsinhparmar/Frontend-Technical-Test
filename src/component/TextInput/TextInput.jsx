import React from "react";
import "./TextInput.css";

const TextInput = (props) => {
  const {
    id,
    type,
    name,
    placeholder,
    value,
    onChange,
    styleClass
  } = props;

  return (
    <input
      id={id}
      type={type}
      placeholder={placeholder}
      className={`input-number ${styleClass}`}
      name={name}
      value={value}
      onChange={onChange}
    />
  );
};

export default TextInput;
