import React from 'react';

const Card = ({title, body, priority_id, status_id, created_by, assigned_to})=>{
    return (
      <div className="card-entry">     
      <div className="title">Title: { title } </div>    
      <div className="body">Body: { body } </div>
      <div className="priority">Priority: { priority_id } </div>
      <div className="status">Status: { status_id } </div>
      <div className="created_by">Created By: { created_by } </div>
      <div className="assigned_to">Assigned To: { assigned_to } </div> 
      </div> 
    )
}

export default Card;
