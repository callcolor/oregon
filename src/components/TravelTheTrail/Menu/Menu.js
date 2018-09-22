import React, { Component } from 'react';

import './Menu.css';

export default class extends Component {
  constructor() {
    super();
    this._mounted = false;
    this.state = {
    };
  }

  handleClick(i) {
    const page = this.props.page;
    const options = page.options || [];
    const option = options[i] || {};
    const target = option.target || page.target;
    const patch = option.save || {};

    if (target) {
      this.props.onSubmit(target, patch);
    }
  }

  componentDidMount() {
    this._mounted = true;
    const body = document.getElementById("body");
    body.onkeydown = (e) => {
      if (!this._mounted) return;
      const page = this.props.page;
      const options = page.options || [];
      const target = page.target;

      e = e || window.event;
      const key = String.fromCharCode(e.keyCode);
      const i = key - 1;
      if (options && options.constructor === [].constructor && options[i]) {
        e.preventDefault();
        this.handleClick(i);
      }
      if (key === " " && target) {
        e.preventDefault();
        this.handleClick();
      }
    };
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  render() {
    const page = this.props.page;
    const header = page.header;
    const prompt = page.prompt;
    const options = page.options || [];
    const modal = page.modal;
    const data = this.props.data;
    const background = page.background || '';
    const target = page.target;
    const instruction = page.instruction;

    return (
      <div style={{backgroundImage: `url('${background}')`}} className={'menu ' + (header ? 'with-header' : 'without-header')}>
        {header && (
          <h2>{header}</h2>
        )}
        <div className='options'>
          {prompt && (
            <p className="prompt">{prompt}</p>
          )}
          {typeof options === 'string' ? (
            <p>
              {options}
            </p>
          ) : (
            <ol>
              {options.map((option, i) => (
                <li key={i} onClick={this.handleClick.bind(this, i)}>{option.label}</li>
              ))}
            </ol>
          )}
          {modal && (
            <p className="modal">{modal(data)}</p>
          )}
          {instruction && (
            <p className="instruction">{instruction}</p>
          )}
        </div>
        {target && (
          <p className="space" onClick={this.handleClick.bind(this)}>Press SPACE BAR to continue</p>
        )}
      </div>
    );
  }
}
