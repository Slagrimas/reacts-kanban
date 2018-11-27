import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Board from '../Board';
import AddCard from '../AddCard/AddCard';
import { loadCards } from '../../actions/cardActions';
import LoadingModal from '../../LoadingModal';


class App extends Component {

  componentDidMount() {
    this.props.loadCards();
  }
  render() {

    return (
      <div className="Components">
        <h1 className="Header">He hōʻailona</h1>
        <LoadingModal isLoading={false} />
        <Board cards={this.props.cards} />
        <AddCard />

      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    cards: state,
    isLoading: state.isLoading
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loadCards: () => {
      dispatch(loadCards());
    },
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);