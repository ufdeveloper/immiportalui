import React, {Component} from "react";

import classes from './AddEmployment.css';
import Button from "../../UI/Button/Button";

class addEmployment extends Component {

    state = {
        employer: {}
    }

    onTitleChanged = (event) => {
        let employer = {...this.state.employer};
        employer['title'] = event.target.value;
        console.log("onTitleChanged employer=", employer);
        this.setState({
            employer: employer
        });
    }

    onNameChanged = (event) => {
        let employer = {...this.state.employer};
        employer['name'] = event.target.value;
        console.log("onNameChanged employer=", employer);
        this.setState({
            employer: employer
        });
    }

    onStartDateChanged = (event) => {
        let employer = {...this.state.employer};
        employer['fromDate'] = event.target.value;
        console.log("onStartDateChanged employer=", employer);
        this.setState({
            employer: employer
        });
    }

    onEndDateChanged = (event) => {
        let employer = {...this.state.employer};
        employer['toDate'] = event.target.value;
        console.log("endDate employer=", employer);
        this.setState({
            employer: employer
        });
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="employerName">Employer Name</label>
                    <input type="text"
                           className="form-control"
                           id="employerName"
                           placeholder="Employer Name"
                           value={this.state.employer['name'] || ''}
                           onChange={this.onNameChanged}/>
                </div>
                <div className="form-group">
                    <label htmlFor="jobTitle">Job Title</label>
                    <input type="text" className="form-control" id="jobTitle" placeholder="Job Title"
                           value={this.state.employer['title'] || ''}
                           onChange={this.onTitleChanged}/>
                </div>
                <div className="form-group">
                    <label htmlFor="startDate">Start Date</label>
                    <input type="text" className="form-control" id="startDate" placeholder="Start Date"
                           value={this.state.employer['fromDate'] || ''}
                           onChange={this.onStartDateChanged}/>
                </div>
                <div className="form-group">
                    <label htmlFor="endDate">End Date</label>
                    <input type="text" className="form-control" id="endDate" placeholder="End Date"
                           value={this.state.employer['toDate'] || ''}
                           onChange={this.onEndDateChanged}/>
                </div>
                <Button
                    clicked={(event) => this.props.addEmploymentSubmitted(event, this.state.employer)}>Submit</Button>
                <Button clicked={this.props.dismissEmploymentModalClicked}>Cancel</Button>
            </form>
        );
    }
};

export default addEmployment;