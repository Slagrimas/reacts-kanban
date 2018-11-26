import React from 'react';
import EditCard from '../Edit Card';
import axios from 'axios';

class Card extends React.Component {
  constructor(props) {
    super(props)
    console.log('this is the cards props', props)
    this.state = {
      card: this.props,
      editClick: false,
    }
    this.toggleEdit = this.toggleEdit.bind(this);
    this.deleteCard = this.deleteCard.bind(this);
  }

  toggleEdit(event) {
    this.setState({
      editClick: !this.state.editClick
    })
  }

  deleteCard() {
    axios.delete(`/api/cards/${this.props.id}`)
      .then(response => {
        const card = response.data;
        console.log('succesful delete')
        return card;
      })
      .catch(err => console.log(err));
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
        <button id="edit_button" onClick={this.toggleEdit}>Edit</button>
        {this.state.editClick && <EditCard id={id} />}
        <button id="deleteBtn" type="button" onClick={this.deleteCard}>Delete</button>
      </div>
    )
  }
}

export default Card;
