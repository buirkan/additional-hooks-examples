import React, { useState, useDebugValue } from 'react';

const MyCustomHook = (status) => {
  const [isOnline, setIsOnline] = useState(status);

  useDebugValue(isOnline ? 'User is Online' : 'User is Offline');

  return isOnline;
}

export default () => {
  const onlineStatus = MyCustomHook(true);
  return <div>{onlineStatus}</div>
}