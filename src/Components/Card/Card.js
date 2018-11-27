import React from 'react';
import EditCard from '../Edit Card';
import { connect } from 'react-redux';
import { deleteCard } from '../../actions/cardActions';
import { editCard } from '../../actions/cardActions';

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      editClick: false,
      id: props.id,
      title: props.title,
      body: props.body,
      priority_id: props.priority_id,
      status_id: props.status_id,
      created_by: props.created_by,
      created: props.created,
      assigned_to: props.assigned_to,
      assign: props.assign
    }
  
    this.toggleEdit = this.toggleEdit.bind(this);
    this.leftClick = this.leftClick.bind(this);
    this.rightClick = this.rightClick.bind(this);
  }

  toggleEdit(event) {
    this.setState({
      editClick: !this.state.editClick
    })
  }

  leftClick(event) {
    event.preventDefault();
    const data = {
      id: this.state.id,
      title: this.state.title,
      body: this.state.body,
      priority_id: this.state.priority_id,
      status_id: this.state.status_id - 1,
      created_by: this.state.created_by,
      assigned_to: this.state.assigned_to
    }
    console.log('left click', data)
    this.props.editCard(data);
  }

  rightClick(event) {
    event.preventDefault();
    const data = {
      id: this.state.id,
      title: this.state.title,
      body: this.state.body,
      priority_id: this.state.priority_id,
      status_id: this.state.status_id + 1,
      created_by: this.state.created_by,
      assigned_to: this.state.assigned_to
    }
    console.log('rightClick', data)
    this.props.editCard(data);
  }
  render() {
    const { id, title, body, priority, status, created, assigned } = this.props
    // console.log('this is props', this.props)
    const statusId = this.props.status_id
    return (
      <div className="card-entry">
        <div className="title">Inoa: {title} </div>
        <div className="body">KANAWAI: {body} </div>
        <div className="priority">Ka mea nui: {priority} </div>
        <div className="status">kūlana: {status} </div>
        <div className="created_by">ua hana 'ia e: {created} </div>
        <div className="assigned_to">hāʻawiʻia i: {assigned} </div>

    <div className="moveCard">
               {statusId > 1 && ( <button className="left" id="move_left" onClick={this.leftClick}>
                 <p> <i className="arrowleft"></i></p>
               </button>)}
               {statusId <= 2 && ( <button className="right" id="move_right" onClick={this.rightClick}>
                 <p> <i className="arrowright"></i></p>
               </button>) }
             </div>
        <button id="edit_button" onClick={this.toggleEdit}>Edit</button>
        {this.state.editClick && <EditCard data={this.props} id={id} />}
        <button id="deleteBtn" type="button" onClick={() => { this.props.deleteCard(id) }}>Delete</button>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    cards: state
  }
}

const mapDispatchToProps = dispatch => {
  return {
    editCard: (card) => {
        dispatch(editCard(card));
    },
      deleteCard: (card) => {
          dispatch(deleteCard(card));
      }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Card);