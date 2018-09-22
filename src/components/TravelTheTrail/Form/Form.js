import React, { Component } from 'react';

import './Form.css';

export default class extends Component {
  constructor() {
    super();
    this._mounted = false;
    this.state = {
      patch: {},
    };
  }

  handleEnter() {
    const page = this.props.page;
    const controls = page.controls;
    const patch = this.state.patch;
    const activeElement = document.activeElement;

    let required = controls.length;
    controls.forEach((control, i) => {
      if (patch[control.name] && patch[control.name].length > 0) {
        required--;
      }
      const element = document.getElementById(`form-input-${i}`);
      const nextElement = document.getElementById(`form-input-${i + 1}`);
      if (element === activeElement && nextElement) {
        nextElement.focus();
      }
    });
    if (required <= 0) {
      this.handleSubmit();
    }
    console.log(required);
  }

  handleSubmit() {
    const page = this.props.page;
    const target = page.target;
    const patch = this.state.patch;
    this.props.onSubmit(target, patch);
  }

  componentDidMount() {
    this._mounted = true;
    const body = document.getElementById("body");
    body.onkeydown = (evt) => {
      if (!this._mounted) return;

      evt = evt || window.event;
      if (evt.keyCode === 13) { // 13 = enter
        this.handleEnter();
      }
    };
  }

  componentWillUnmount() {
    this._mounted = false;
  }

  handleChange(value, key) {
    const patch = this.state.patch;
    patch[key] = value.toUpperCase();
    this.setState({
      patch,
    });
  }

  render() {
    const page = this.props.page;
    const prompt = page.prompt;
    const background = page.background || '';
    const controls = page.controls;
    const patch = this.state.patch;

    return (
      <div style={{backgroundImage: `url('${background}')`}} className='form'>
        {prompt && (
          <p className="prompt">{prompt}</p>
        )}
        <form className='controls'>
          {controls.map((control, i)=> {
            return (
              <label key={control.name}>
                {i + 1}.
                <input autoFocus={i === 0} id={`form-input-${i}`} name={control.name} value={patch[control.name] || control.value}
                  onChange={e => {this.handleChange(e.target.value, control.name)}}/>
              </label>
            );
          })}
        </form>
        <p className="space" onClick={this.handleEnter.bind(this)}>Enter then press Return</p>
      </div>
    );
  }
}
