import React, { Component } from 'react';
// import './App.css';
import dummyData from '../../dummyData.json';
import Board from '../Board/'

class App extends Component {
  constructor(props) {
    super(props);
    //State is an object, items is an array of objects
    this.state = {
      dataStuff: null
    }
  }

  componentDidMount() {
      this.setState({ 
        dataStuff: dummyData
      })

  }

  render() {
    console.log('string', this.state.dataStuff)
    return (
      <div className="App">
        <h1>Shad React Kanaban</h1>
        <Board data={this.state.dataStuff} />
      </div>
    );
  }
}

export default App;
