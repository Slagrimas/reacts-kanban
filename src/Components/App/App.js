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
    axios.get('/api/cards')
      .then(response => {
        console.log('cards ', response.data)
        const cards = response.data;
        this.props.loadCards(cards);

      })
      .catch(err => { console.log(err) });

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

  //     render() {
  //         return (
  //             <div className="App">
  //                 <BookListAppTitle title="Shadrach's Book Title" />
  //                 <BookList books={this.props.books} />
  //                 <AddBook />
  //             </div>
  //         )
  //     };
  // };


  // const mapStateToProps = (state) => {
  //     return {
  //         books: state
  //     }
  // }

  // const mapDispatchToProps = (dispatch) => {
  //     return {
  //         loadBooks: (books) => {
  //             dispatch(loadBooks(books));
  //         }
  //     }
  // }
  // export default connect(mapStateToProps, mapDispatchToProps)(App);
