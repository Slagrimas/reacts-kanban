import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Board from '../Board';
import { loadCards } from '../../actions/cardActions';
import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const mockCards = [
      {
        "id": 1,
        "title": "Clean Car",
        "body": "Put your back into it",
        "priority": "low",
        "status": "Queue",
        "createdBy": "Jaynee",
        "AssignedTo": "Shad"
      },
      {
        "id": 6,
        "title": "Plan 1st Birthday Party",
        "body": "Slade's 1st Birthday",
        "priority": "high",
        "status": "Queue",
        "createdBy": "BJ",
        "AssignedTo": "Driana"
      },
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
      },
      {
        "id": 3,
        "title": "Pick Up Breakfast",
        "body": "Most important meal of the day",
        "priority": "low",
        "status": "Done",
        "createdBy": "Sam",
        "AssignedTo": "Leo"
      },
      {
        "id": 5,
        "title": "Pay Phone Bill",
        "body": "Phones are important, must pay",
        "priority": "high",
        "status": "Done",
        "createdBy": "Shad",
        "AssignedTo": "Jay"
      },
    ]
    this.props.loadCards(mockCards);
  }

  render() {
    return (
      <div className="Components">
        <h1>Shad's React Kanaban</h1>
        <Board cards={this.props.cards} />
  
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
      cards: state
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
      loadCards: (cards) => {
          dispatch(loadCards(cards));
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
  // Queue(props) {
  //   return props.queueItems.map(queueItem => <div>{queueItem.title}</div>)
  // }

