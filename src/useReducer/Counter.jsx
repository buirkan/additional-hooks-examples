import React, { useReducer } from 'react';

import countReducer, { initialState } from './countReducer';

export default () => {
  const [state, dispatch] = useReducer(countReducer, initialState);

  return (
    <>
      <p>Count: {state.count}</p>
      <button onClick={() => dispatch({ type: 'inc' })}>Increment</button>
      <button onClick={() => dispatch({ type: 'res' })}>Reset</button>
      <button onClick={() => dispatch({ type: 'dec' })}>Decrement</button>
    </>
  );
}