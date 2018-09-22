import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Home from 'views/Home/Home';

import './Public.css';

export default class extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className='public'>

        <Switch>
          <Route path="/" component={Home} />
        </Switch>

      </div>
    );
  }
}
