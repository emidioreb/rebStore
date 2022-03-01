import React from 'react';
import { Switch } from 'react-router-dom';
import Routes from './Routes';

function App() {
  return (
    <div className="App">
      <Switch>
        <Routes />
      </Switch>
    </div>
  );
}

export default App;
