import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux';
import Board from '../Board';
import AddCard from '../AddCard/AddCard';
import EditCard from '../Edit Card/editCard';
import { loadCards } from '../../actions/cardActions';
import LoadingModal from '../../LoadingModal';

class App extends Component {

  componentDidMount() {
    console.log('this is props', this.props)
      this.props.loadCards();
    }
  render() {
    // const isLoading = this.props.isLoading.isLoading
    return (
      <div className="Components">
        <h1 className="Header">Shad's React Kanaban</h1>
        <LoadingModal isLoading={true} />
        <Board cards={this.props.cards} />
        <AddCard />
        <EditCard />
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
    loadCards: () => {
      dispatch(loadCards());
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

