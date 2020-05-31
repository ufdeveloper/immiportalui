import React from 'react';

import classes from './Travel.css';

const travel = (props) => {
    return (
        <div className={classes.Travel}>
            <span onClick={() => props.removeTravel(props.id)}><i className="fas fa-trash-alt"></i></span>
            <p style={{fontWeight: 'bold'}}><strong>{props.name}</strong></p>
            <p>Exit Date: {props.exitDate}</p>
            <p>Entry Date: {props.enterDate}</p>
            <p>Port Of Entry: {props.portOfEntry}</p>
        </div>
    );
};

export default travel;