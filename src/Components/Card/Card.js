import React from 'react';
import EditCard from '../Edit Card';


class Card extends React.Component {
  constructor(props){
    super(props)

  
    this.state ={
      editClick: false,
    }
    this.toggleEdit = this.toggleEdit.bind(this);
  }


  toggleEdit(event){
    this.setState({ 
      editClick: !this.state.editClick
    })
  }

  render() {
   const { id, title, body, priority, status, created, assigned } = this.props
    // console.log('!!!!!!!!!!!!!!!!!!!!!', this.props)
    
    return (
      <div className="card-entry">     
       <div className="title">Title: { title } </div>    
       <div className="body">Body: { body } </div>
       <div className="priority">Priority: { priority } </div>
       <div className="status">Status: { status } </div>
       <div className="created_by">Created By: { created } </div>
       <div className="assigned_to">Assigned To: { assigned } </div> 
       <button id="edit_button" onClick={this.toggleEdit}>Edit</button>
      {this.state.editClick && <EditCard id={id}/>}
      </div> 
    )
  }
}

export default Card;
