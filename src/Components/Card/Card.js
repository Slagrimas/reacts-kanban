import React from 'react';

const Card = ({title, body, priority, status, createdBy, AssignedTo})=>{
    return (
      <div className="card-entry">     
      <div className="title">Title: { title } </div>    
      <div className="body">Body: { body } </div>
      <div className="priority">Priority: { priority } </div>
      <div className="status">Status: { status } </div>
      <div className="created_by">Created By: { createdBy } </div>
      <div className="assigned_to">Assigned To: { AssignedTo } </div> 
      </div> 
    )
}

export default Card;
