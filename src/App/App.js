import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    //State is an object, items is an array of objects
    this.state = {
        items: []
    }

  }
  render() {
    return (
      <div className="App">
        <h1>Shad's React Kanaban</h1>
      </div>
    );
  }
}

export default App;
