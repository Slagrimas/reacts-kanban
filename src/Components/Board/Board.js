import React from 'react';
import Column from '../Column'

const Board = props => {
    // console.log('board props', props)
    return (

        <div className="Board">
            <Column title="Queue" cards={props.cards} status={1} />
            <Column title="In Progress" cards={props.cards} status={2} />
            <Column title="Done" cards={props.cards} status={3} />
        </div>
    );
};

export default Board;

