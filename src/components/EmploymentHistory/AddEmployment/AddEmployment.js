import React from "react";

import classes from './AddEmployment.css';
import Button from "../../UI/Button/Button";

const addEmployment = (props) => {
    return (
        <form>
            <div className="form-group">
                <label htmlFor="employerName">Employer Name</label>
                <input type="text" className="form-control" id="employerName" placeholder="Employer Name" />
            </div>
            <div className="form-group">
                <label htmlFor="jobTitle">Job Title</label>
                <input type="text" className="form-control" id="jobTitle" placeholder="Job Title" />
            </div>
            <div className="form-group">
                <label htmlFor="startDate">Start Date</label>
                <input type="text" className="form-control" id="startDate" placeholder="Start Date" />
            </div>
            <div className="form-group">
                <label htmlFor="endDate">End Date</label>
                <input type="text" className="form-control" id="endDate" placeholder="End Date" />
            </div>
            <Button clicked={props.addEmploymentSubmitted}>Submit</Button>
            <Button clicked={props.dismissEmploymentModalClicked}>Cancel</Button>
        </form>
    );
};

export default addEmployment;