import React from 'react';

function Card(props) {

    return (
        <div className="card" onClick={props.handleClick}>
            <img src={props.src} alt={props.title} />
            <div className="card-title">{props.title}</div>
        </div>
    );
}

export default Card;
