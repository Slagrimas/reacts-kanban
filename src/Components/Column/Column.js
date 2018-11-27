import React from 'react';
import Card from '../Card';


const Column = props => {
    return (
        <div className="column-container">
            <h4 className="status-title"> {props.title} </h4>
            {
                props.cards
                    .filter(card => {
                        return props.status === card.status_id
                    })
                    .map((card) => {

                        return <Card
                            key={card.id}
                            id={card.id}
                            title={card.title}
                            body={card.body}
                            priority={card.priority.name}
                            priority_id={card.priority_id}
                            status={card.status.name}
                            status_id={card.status_id}
                            created={card.created.first_name}
                            created_by={card.created_by}
                            assigned={card.assigned.first_name}
                            assigned_to={card.assigned_to}
                            className='card'
                        />
                    })
            }
        </div>
    )
}

export default Column; 
