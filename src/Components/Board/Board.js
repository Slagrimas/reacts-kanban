import React from 'react';
import Column from '../Column'

const Board = props => {
    console.log('board props', props)
    return (

        <div>
            <h2>This is the board</h2>
            <Column cards={props.cards} status="Queue" />
            <Column cards={props.cards} status="In Progress" />
            <Column cards={props.cards} status="Done" />
        </div>
    );
};

export default Board;

