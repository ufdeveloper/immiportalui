import React, {Component} from 'react';
import Aux from "../../hoc/Aux/Aux";
import EmploymentHistory from "../../components/EmploymentHistory/EmploymentHistory";
import {Switch, Route} from "react-router-dom";

class Homepage extends Component {

    render() {

        console.log("Homepage:render");

        return (
            <Aux>
                <Switch>
                    <Route path="/employment" component={EmploymentHistory} />
                    <Route path="/travel" component={EmploymentHistory} />
                    <Route path="/education" component={EmploymentHistory} />
                    <Route path="/docs" component={EmploymentHistory} />
                </Switch>
            </Aux>
        );
    }
};

export default Homepage;