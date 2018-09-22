import React, { Component } from 'react';

import Menu from 'components/TravelTheTrail/Menu/Menu';
import Form from 'components/TravelTheTrail/Form/Form';
import Table from 'components/TravelTheTrail/Table/Table';

import './TravelTheTrail.css';

import pages, { data } from './original.js';

const startPage = 'main';

export default class extends Component {
  constructor() {
    super();
    this.state = {
      currentPage: startPage,
    };
  }

  componentDidMount() {
    const setFontSize = () => {
      const size = document.getElementById('ttt-wrap').offsetWidth;
      document.getElementById('ttt-app').style.fontSize = (size / 34) + 'px';
    }
    window.addEventListener('resize', () => {
      setFontSize();
    });
    setFontSize();
  }

  setPage(currentPage, patch = {}) {
    Object.keys(patch).forEach(key => {
      if (typeof patch === 'function') {
        data[key] = patch(data[key], data);
      } else {
        data[key] = patch[key];
      }
    });
    console.log(data);

    this.setState({
      currentPage,
    });
  }

  render() {
    const page = pages[this.state.currentPage] || pages[startPage];
    console.log('ttt Render');
    console.log(page);

    return (
      <div id="ttt-app" className="travel-the-trail">
        <div id="ttt-wrap" className="component-wrapper">
          {page.component === 'Menu' && (
            <Menu onSubmit={this.setPage.bind(this)} page={page} data={data} />
          )}
          {page.component === 'Form' && (
            <Form onSubmit={this.setPage.bind(this)} page={page} data={data} />
          )}
          {page.component === 'Table' && (
            <Table onSubmit={this.setPage.bind(this)} page={page} data={data} />
          )}
        </div>
      </div>
    );
  }
}
