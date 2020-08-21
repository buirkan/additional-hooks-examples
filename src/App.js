import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import Counter from './useReducer/Counter';
import Ref from './useRef/Ref';
import ImpHandleExample from './useImperativeHandle/ImperativeHandle';
import LayoutEffect from './useLayoutEffect/LayoutEffect';
import CustomHookDebug from './useDebugValue/CustomHook';

function App() {
  return (
    <>
      <Router>
        <Switch>
          {/* useReducer tests */}
          <Route path='/reducer' component={Counter} />
          <Route path='/ref' component={Ref} />
          <Route path='/imp' component={ImpHandleExample} />
          <Route path='/layout' component={LayoutEffect} />
          <Route path='/debug' component={CustomHookDebug} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
