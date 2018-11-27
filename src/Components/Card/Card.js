import React from 'react';
import EditCard from '../Edit Card';
import { connect } from 'react-redux';
import { deleteCard } from '../../actions/cardActions';

class Card extends React.Component {
  constructor(props) {
    super(props)
    // console.log('this is the cards props', props)
    this.state = {
      card: this.props,
      editClick: false,
    }
    this.toggleEdit = this.toggleEdit.bind(this);
  }

  toggleEdit(event) {
    this.setState({
      editClick: !this.state.editClick
    })
  }

  leftClick(event){
    console.log('left')
  }

  rightClick(event){
    console.log('right')
  }
  render() {
    const { id, title, body, priority, status, created, assigned } = this.props
    return (
      <div className="card-entry">
        <div className="title">Title: {title} </div>
        <div className="body">Body: {body} </div>
        <div className="priority">Priority: {priority} </div>
        <div className="status">Status: {status} </div>
        <div className="created_by">Created By: {created} </div>
        <div className="assigned_to">Assigned To: {assigned} </div>
        <i className="arrow left" onClick={this.leftClick}></i>
        <button id="edit_button" onClick={this.toggleEdit}>Edit</button>
        {this.state.editClick && <EditCard id={id} />}
        <button id="deleteBtn" type="button" onClick={() => { this.props.deleteCard(id) }}>Delete</button>
        <i className="arrow right" onClick={this.rightClick}></i>
      </div>
    )
  }
}

const mapDispatchToProps = dispatch => {
  return {
      deleteCard: (card) => {
          dispatch(deleteCard(card));
      }
  }
}

export default connect(null, mapDispatchToProps)(Card);