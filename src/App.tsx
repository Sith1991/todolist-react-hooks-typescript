import React from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';

import './App.scss';

export const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App container pt-4">
        <Switch>

        </Switch>
      </div>
    </BrowserRouter>
  );
};
