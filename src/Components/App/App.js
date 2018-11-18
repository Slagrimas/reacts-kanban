import React, { Component } from 'react';
import './App.css';
import Column from '../Column'
import Card from '../Card/'
import Board from '../Board';

class App extends Component {
  constructor(props) {
    super(props);
    console.log('props', props)
    this.state = {
      queueItems: [
        {
          "id": 1,
          "title": "Clean Car",
          "body": "Put your back into it",
          "priority": "low",
          "status": "Queue",
          "createdBy": "Bob",
          "AssignedTo": "John"
        }
      ],
      inProgressItems: [
        {
          "id": 2,
          "title": "Pay bills",
          "body": "Credit card bills due this month",
          "priority": "high",
          "status": "In Progress",
          "createdBy": "Bill",
          "AssignedTo": "Rich"
        },
        {
          "id": 4,
          "title": "Go to work",
          "body": "Earn money, don't be homeless",
          "priority": "medium",
          "status": "In Progress",
          "createdBy": "Paul",
          "AssignedTo": "Mark"
        }
      ],
      doneItems: [
        {
          "id": 3,
          "title": "Pick Up Breakfast",
          "body": "Most important meal of the day",
          "priority": "low",
          "status": "Done",
          "createdBy": "Sam",
          "AssignedTo": "Leo"
        },
      ]
    }
  }

  
  render() {
    console.log('this.state.queueItems', this.state.queueItems)
    return (
      <div className="Components">
        <h1>Shad React Kanaban</h1>
        {this.state.queueItems}
        {/* <Column />
        <Card /> */}

  
      </div>
    );
  }
}


export default App;

  // Queue(props) {
  //   return props.queueItems.map(queueItem => <div>{queueItem.title}</div>)
  // }

