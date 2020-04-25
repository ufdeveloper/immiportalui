import React, {Component} from 'react';
import Employment from "./Employment/Employment";

import classes from './EmploymentHistory.css';

class EmploymentHistory extends Component {

    state = {
        employers: [
            {
                name: 'ABC',
                title: 'Senior Software Engineer',
                address: '100 1st St',
                fromDate: '11/11/2017',
                toDate: '11/11/2019'
            },
            {
                name: 'XYZ',
                title: 'Software Engineer',
                address: '100 1st St',
                fromDate: '11/11/2015',
                toDate: '11/11/2017'
            }
        ]
    }

    render() {

        return (
            <div className={classes.EmploymentHistory}>
                {
                    this.state.employers
                        .map(employer => {
                            return <Employment
                                name={employer.name}
                                title={employer.title}
                                address={employer.address}
                                fromDate={employer.fromDate}
                                toDate={employer.toDate}/>;
                    })
                }
            </div>
        );
    }
};

export default EmploymentHistory;