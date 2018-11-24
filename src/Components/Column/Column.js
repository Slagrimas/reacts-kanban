import React from 'react';
import Card from '../Card';


const Column = props => {
    console.log('Column Props', props)
    return (
        <div className="column-container">
            <h4 className="status-title"> {props.title} </h4>
            {  
                props.cards
                    .filter(card => {
                        return props.status === card.status_id
                    })
                    .map((card) => {
                        console.log('this is the card', card)
                        console.log('this is card f_name', card.created.first_name);
                        return <Card
                            key={card.id}
                            id={card.id}
                            title={card.title}
                            body={card.body}
                            priority={card.priority.name}
                            status={card.status.name}
                            created={card.created.first_name}
                            assigned={card.assigned.first_name}
                            className='card'
                        />
                      
                    })
            }
        </div>
    )
}

export default Column;
