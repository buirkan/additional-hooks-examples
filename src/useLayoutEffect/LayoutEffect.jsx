import React, { useLayoutEffect, useRef } from 'react';

export default () => {
  const textRef = useRef(null);

  /**
   * Setting slow network on browser devTools, and using 'useEffect' effect hook, we can see 
   * a flash on the interface when is updating some style property for example. This case is 
   * optimized with the 'useLayoutEffect'.
   */
  useLayoutEffect(() => {
    console.log('Updating text color before screen paints');
    textRef.current.style.color = 'teal';
  });

  return (
    <h2 ref={textRef}>Testing Layout Effect !</h2>
  )
}