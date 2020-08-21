import React from 'react';

export default () => {
  return (
    <>
    </>
  );
}

/*
  useCallback(): memoized callback

  Memoized callback: Technique used primarily to speed up computer programs by storing the results of expensive function calls and returning the cached result when the same inputs occur again.

  Is useful when passing callbacks to optimized child components that rely on reference equality to prevent unnecessary renders.
*/