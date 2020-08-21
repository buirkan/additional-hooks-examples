import React, { useRef } from 'react';

/**
 * useRef() creates a plain JavaScript object. The only difference between useRef() and creating a {current: ...}   
 * object yourself is that useRef will give you the same ref object on every render.
 */
export default () => {
  const inputElement = useRef(null);
  
  const onButtonClick = () => {
    console.log(inputElement);
    inputElement.current.focus();
  };

  return (
    <>
      <input ref={inputElement} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  );
}