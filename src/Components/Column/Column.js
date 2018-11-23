import React from 'react';
import Card from '../Card';

const Column = props => {
    console.log('Column Props', props)
    return (
        <div className="column-container">
            <h4 className="status-title"> {props.status} </h4>
            {  
                props.cards
                    .filter(card => {
                        return props.status === card.status_id
                    })
                    .map((card) => {
                        return <Card
                            key={card.id}
                            title={card.title}
                            body={card.body}
                            priority={card.priority_id}
                            status={card.status_id}
                            createdBy={card.created_by}
                            AssignedTo={card.assigned_to}
                            className='card'
                        />
                    })
            }
        </div>
    )
}

export default Column;
