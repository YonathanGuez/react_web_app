import React, { Component } from 'react';
import { Table } from 'react-bootstrap';

export class Grid extends Component {
  constructor(props) {
    super(props);
    this.state = { deps: [] };
  }

  componentDidMount() {
    this.refreshList();
  }
  refreshList() {
    this.setState({
      deps: [
        { test1: 1, test2: 'salut' },
        { test1: 2, test2: 'Hello' },
      ],
    });
  }

  render() {
    const { deps } = this.state;
    return (
      <Table className="mt-4" striped bordered hover size="sm">
        <thead>
          <tr>
            <th>test1</th>
            <th>test2</th>
          </tr>
        </thead>
        <tbody>
          {deps.map((dep) => (
            <tr key={dep.test1}>
              <td>{dep.test1}</td>
              <td>{dep.test2}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    );
  }
}
