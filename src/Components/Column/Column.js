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
                        return props.status === card.status
                    })
                    .map((card) => {
                        return <Card
                            key={card.id}
                            title={card.title}
                            body={card.body}
                            priority={card.priority}
                            status={card.status}
                            createdBy={card.createdBy}
                            AssignedTo={card.AssignedTo}
                            className='card'
                        />
                    })
            }
        </div>
    )
}


export default Column;

