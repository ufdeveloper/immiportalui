import React from 'react';

import classes from './Employment.css';

const employment = (props) => {
    return (
        <div className={classes.Employment}>
            <p>Employer Name: {props.name}</p>
            <p>Title: {props.title}</p>
            <p>Address: {props.address}</p>
            <p>Start Date: {props.fromDate}</p>
            <p>End Date: {props.toDate}</p>
        </div>
    );
};

export default employment;