import React from 'react';
import EditCard from '../Edit Card'
import EditCardButton from '../../EditCardButton/EditCardButton';

const Card = ({title, body, priority, status, created, assigned})=>{
    return (
      <div className="card-entry">     
      <div className="title">Title: { title } </div>    
      <div className="body">Body: { body } </div>
      <div className="priority">Priority: { priority } </div>
      <div className="status">Status: { status } </div>
      <div className="created_by">Created By: { created } </div>
      <div className="assigned_to">Assigned To: { assigned } </div> 
      </div> 
    )
}

export default Card;
