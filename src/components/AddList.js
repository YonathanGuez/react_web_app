import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
export class AddList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputValue: '',
      items: [],
    };
  }

  onInputChange(e) {
    this.setState({
      inputValue: e.target.value,
    });
  }

  addItem() {
    let items = this.state.items;
    items.push(this.state.inputValue);
    this.setState({
      items,
    });
  }

  removeItem() {
    let items = this.state.items;
    items.pop();
    this.setState({
      items,
    });
  }

  listItems() {
    let items = this.state.items;
    return (
      <ul>
        {items.map((val, index) => {
          return <li key={index}>{val}</li>;
        })}
      </ul>
    );
  }

  render() {
    return (
      <div>
        <input
          className="input-add"
          type="text"
          onChange={(e) => this.onInputChange(e)}
        />
        <Button variant="primary" onClick={() => this.addItem()}>
          Add item
        </Button>
        <Button variant="secondary" onClick={() => this.removeItem()}>
          delete last item
        </Button>
        {this.listItems()}
      </div>
    );
  }
}
