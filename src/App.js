import React, { Component } from 'react';
import Header from './Header';
import InventoryItem from './InventoryItem';
import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      items: [
        { name: 'Shoe', price: 10 },
        { name: 'Sock', price: 20 },
      ],
    };
  }

  render() {
    return (
      <div>
        <Header title="Buystuff" />
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
            {this.state.items.map((item, index) => (
              <tr key={index}>
                <td>{item.name}</td>
                <td>{item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default App;
