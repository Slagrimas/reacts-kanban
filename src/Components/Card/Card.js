import React from 'react';


const Card = props => {
    console.log('This is props info', props)
    // const { title, body, priority, status, created_by, assigned_to } = props
    return (
      <div className="card-entry">     
      {/* <div className="title">Title: { title }</div>    
      <div className="body">Body: { body }</div>
      <div className="priority">Priority: { priority }</div>
      <div className="status">Status: { status }</div> }
      <div className="priority_id">Priority: { priority }</div>
      <div className="status_id">Status: { status }</div>
      <div className="created_by">Created By { created_by }</div>
      <div className="assigned_to">Assigned To{ assigned_to }</div>  */}
      </div> 
    )
}

export default Card;