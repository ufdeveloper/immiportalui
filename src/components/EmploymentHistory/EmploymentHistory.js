import React, {Component} from 'react';
import { uuid } from 'uuidv4';
import Employment from "./Employment/Employment";
import Button from '../UI/Button/Button';

import classes from './EmploymentHistory.css';
import Modal from "../UI/Modal/Modal";
import AddEmployment from "./AddEmployment/AddEmployment";
import axios from '../../axios-employmentHistory';
import Spinner from "../UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class EmploymentHistory extends Component {

    state = {
        employers: null,
        error: false,
        fetched: false,
        addingEmployment: false,
        addedEmployment: false
    }

    addEmploymentHandler = () => {
        this.setState({addingEmployment: true});
    }

    dismissEmploymentModalHandler = () => {
        this.setState({addingEmployment: false});
    }

    addEmploymentSubmittedHandler = (event, employer) => {
        event.preventDefault();
        employer['id'] = uuid();
        console.log("employer=", employer);
        // const employer = {
        //     id: uuid(),
        //     name: 'SpaceX',
        //     title: 'CEO',
        //     fromDate: '11/11/2013',
        //     toDate: '11/11/2013',
        //     currentEmployer: false
        // };

        axios.post('/portal/123/employment', employer)
            .then(res => {
                console.log("successfully added employer");
                this.setState({
                    addingEmployment: false,
                    addedEmployment: true
                });
            })
            .catch(err => {
                console.log("error saving employer, err=", err);
            })
    }

    componentDidMount() {

        console.log("EmploymentHistory:componentDidMount");

        axios.get('/portal/123/employment')
            .then(res => {
                console.log("fetched employers=", res.data.employers);
                this.setState({employers: res.data.employers, fetched: true});
            })
            .catch(error => {
                this.setState({error: true, fetched: true});
            });
    }

    componentDidUpdate(prevProps, prevState) {

        console.log("EmploymentHistory:componentDidUpdate");
        console.log("this.state.addedEmployment=", this.state.addedEmployment);
        console.log("prevState.addedEmployment=", prevState.addedEmployment);

        if(this.state.addedEmployment != prevState.addedEmployment) {
            axios.get('/portal/123/employment')
                .then(res => {
                    console.log("fetched employers=", res.data.employers);
                    this.setState({employers: res.data.employers, fetched: true});
                })
                .catch(error => {
                    this.setState({error: true, fetched: true});
                });
            this.setState({addedEmployment: false});
        }
    }

    render() {

        console.log("EmploymentHistory:render");

        let employmentHistory = this.state.error ?
            <p style={{textAlign: 'center', fontSize: '1.3em'}}>Employment history cannot be loaded</p> : <Spinner />;
        if(this.state.fetched && !this.state.error) {
            employmentHistory =
                <div>
                    <p style={{textAlign: 'center', fontSize: '1.3em'}}>Please Add Employment History</p>
                </div>
        }

        if(this.state.employers && this.state.employers.length > 0) {
            employmentHistory =
                        this.state.employers
                            .map(employer => {
                                return <Employment
                                    key={employer.id}
                                    name={employer.name}
                                    title={employer.title}
                                    // address={employer.address}
                                    fromDate={employer.fromDate}
                                    toDate={employer.toDate}/>;
                            });
        }

        return (
            <div className={classes.EmploymentHistory}>
                <Modal
                    show={this.state.addingEmployment}
                    dismissModalHandler={this.dismissEmploymentModalHandler} >
                    <AddEmployment
                        addEmploymentSubmitted={this.addEmploymentSubmittedHandler}
                        dismissEmploymentModalClicked={this.dismissEmploymentModalHandler} />
                </Modal>
                {employmentHistory}
                <Button clicked={this.addEmploymentHandler}>Add Employment</Button>
            </div>

        );
    }
};

export default withErrorHandler(EmploymentHistory, axios);