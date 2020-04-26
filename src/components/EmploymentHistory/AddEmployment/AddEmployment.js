import React from "react";

import classes from './AddEmployment.css';
import Button from "../../UI/Button/Button";

const addEmployment = (props) => {
    return (
        <div className={classes.AddEmployment}>
            <p>Employer Name : <input type='text'/></p>
            <p>Title : <input type='text'/></p>
            <p>Start Date : <input type='text'/></p>
            <p>End Date : <input type='text'/></p>
            <Button clicked={props.addEmploymentSubmitted}>Add</Button>
            <Button clicked={props.dismissEmploymentModalClicked}>Cancel</Button>
        </div>
    );
};

export default addEmployment;