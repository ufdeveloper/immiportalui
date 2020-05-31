import React from 'react';

import classes from './Employment.css';

const employment = (props) => {
    return (
        <div className={classes.Employment}>
            <span onClick={() => props.removeEmployer(props.id)}><i className="fas fa-trash-alt"></i></span>
            <p style={{fontWeight: 'bold'}}><strong>{props.name}</strong></p>
            <p>Title: {props.title}</p>
            <p>Address: {props.address}</p>
            <p>Start Date: {props.fromDate}</p>
            <p>End Date: {props.toDate}</p>
        </div>
    );
};

export default employment;