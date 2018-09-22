import React, { Component } from 'react';
import { cloneDeep } from 'lodash';

import './Table.css';

export default class extends Component {
  constructor() {
    super();
    this._mounted = false;
    this.state = {
    };
  }

  handleClick() {
    const page = this.props.page;
    const target = page.target;
    this.props.onSubmit(target);
  }

  componentDidMount() {
    this._mounted = true;
    const body = document.getElementById("body");
    body.onkeydown = (evt) => {
      if (!this._mounted) return;
      const page = this.props.page;
      const target = page.target;

      evt = evt || window.event;
      const key = String.fromCharCode(evt.keyCode);
      if (key === " " && target) {
        this.handleClick();
      }
    };
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  render() {
    const data = this.props.data;
    const page = this.props.page;
    const header = page.header;
    const background = page.background || '';

    const limit = page['limit'] || 10;
    const columns = page['columns'];
    const rows = cloneDeep(data[page['rows']]).splice(0, limit);
    console.log(rows);
    while (rows.length < limit) {
      rows.push({});
    }
    console.log(rows);


    return (
      <div style={{backgroundImage: `url('${background}')`}} className={'table'}>
        {header && (
          <p className="header">{header}</p>
        )}
        <table>
          <thead>
            <tr>
              {columns.map((column, i) => (
                <th key={i}><span>{column}</span></th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.map((row, i) => (
              <tr key={i}>
                {columns.map((column, i) => (
                  <td className={typeof row[column]} key={i}>{row[column] || '\u00A0'}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
        <p className="space" onClick={this.handleClick.bind(this)}>Press SPACE BAR to continue</p>
      </div>
    );
  }
}
