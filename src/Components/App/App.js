import React, { Component } from 'react';
import './App.css';
import Board from '../Board';
import Column from '../Column'
import Card from '../Card/'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      queueItems: [
        {
          "id": 1,
          "title": "Clean Car",
          "body": "Put your back into it",
          "priority": "low",
          "status": "Queue",
          "createdBy": "Jaynee",
          "AssignedTo": "Shad"
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
    console.log('this.state.inProgressItems', this.state.inProgressItems)
    console.log('this.state.doneItems', this.state.doneItems)
    return (
      <div className="Components">
        <h1>Shad React Kanaban</h1>
        <Board value={this.state.queueItems} />
        <Column Card={this.state.queueItems} />
         <Board value={this.state.inProgressItems} />
        <Column Card={this.state.inProgressItems} />
    

  
      </div>
    );
  }
}


export default App;

  // Queue(props) {
  //   return props.queueItems.map(queueItem => <div>{queueItem.title}</div>)
  // }

