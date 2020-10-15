import React, { Component } from 'react';

export class colorPiking extends Component {
  constructor(props) {
    super(props);
    this.state = {
      oldColor: '#1569a8',
      color: '#1569a8',
      active: false,
    };
  }

  handleChange = (e) => {
    this.setState({
      oldColor: this.state.color,
      color: e.target.value,
      active: !this.state.active,
    });
  };

  render() {
    return (
      <div className="background">
        <h1 className="title">React html5 Color Input</h1>
        <label className="color-selector">
          <span>{this.state.color}</span>
          <input
            type="color"
            value={this.state.color}
            onChange={this.handleChange}
          />
        </label>
      </div>
    );
  }
}
