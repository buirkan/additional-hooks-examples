import React, { useRef, useImperativeHandle, forwardRef } from 'react';

function FancyInput(props, ref) {
  const inputRef = useRef(null);

  useImperativeHandle(inputRef, () => ({
    focus: () => inputRef.current.focus()
  }));

  return (
    <>
      <input ref={inputRef} />
    </>
  );
}

FancyInput = forwardRef(FancyInput);

export default FancyInput;