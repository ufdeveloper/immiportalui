import React, {Component} from 'react';
import Employment from "./Employment/Employment";
import Button from '../UI/Button/Button';

import classes from './EmploymentHistory.css';
import Modal from "../UI/Modal/Modal";
import AddEmployment from "./AddEmployment/AddEmployment";

class EmploymentHistory extends Component {

    state = {
        addingEmployment: false
    }

    addEmploymentHandler = () => {
        this.setState({addingEmployment: true});
    }

    dismissEmploymentModalHandler = () => {
        this.setState({addingEmployment: false});
    }

    addEmploymentSubmittedHandler = () => {

    }

    render() {
        return (
            <div className={classes.EmploymentHistory}>
                <Modal
                    show={this.state.addingEmployment}
                    dismissModalHandler={this.dismissEmploymentModalHandler} >
                    <AddEmployment
                        addEmploymentSubmitted={this.addEmploymentSubmittedHandler}
                        dismissEmploymentModalClicked={this.dismissEmploymentModalHandler} />
                </Modal>
                {
                    this.props.employers
                        .map(employer => {
                            return <Employment
                                key={employer.name}
                                name={employer.name}
                                title={employer.title}
                                // address={employer.address}
                                fromDate={employer.fromDate}
                                toDate={employer.toDate}/>;
                        })
                }
                <Button clicked={this.addEmploymentHandler}>Add Employment</Button>

            </div>

        );
    }
};

export default EmploymentHistory;