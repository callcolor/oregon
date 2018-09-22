import React from 'react';
import ReactDOM from 'react-dom';
import { HashRouter, Route } from 'react-router-dom';

import Public from './layouts/Public/Public';

import 'bulma';
import './index.css';

ReactDOM.render(
  <HashRouter>
    <div className="router">
      <Route path="/" component={Public} />
    </div>
  </HashRouter>,
  document.getElementById('root')
);
