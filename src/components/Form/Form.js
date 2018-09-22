import React, { Component } from 'react';

export default class extends Component {
  constructor() {
    super();
    this.state = {
    };
  }

  submit(e) {
    e.preventDefault();
    const form = e.target;
    const isValid = form.checkValidity();
    if (isValid) {
      const data = [].reduce.call(form.elements, (data, element) => {
        data[element.name] = element.value;
        return data;
      }, {});
      this.props.onSubmit(data);
    }
  }

  render() {
    return (
      <div className="form">
        <form onSubmit={this.submit.bind(this)} >
          {this.props.children}
        </form>
      </div>
    );
  }
}
