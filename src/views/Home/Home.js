import React, { Component } from 'react';

import TravelTheTrail from 'components/TravelTheTrail/TravelTheTrail';

export default class extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  render() {
    return (
      <div className="home">
        <TravelTheTrail />
      </div>
    );
  }
}
