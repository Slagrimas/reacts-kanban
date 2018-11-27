import React from 'react';
import Column from '../Column'

const Board = props => {
    return (

        <div className="Board">
            <Column title="Kuina" cards={props.cards} status={1} />
            <Column title="Ke holo nei" cards={props.cards} status={2} />
            <Column title="Hanaʻia" cards={props.cards} status={3} />
        </div>
    );
};

export default Board;

