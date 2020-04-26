import React, {Component} from 'react';
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";
import Spinner from '../../components/UI/Spinner/Spinner';
import EmploymentHistory from "../../components/EmploymentHistory/EmploymentHistory";
import axios from '../../axios-employmentHistory';
import Aux from "../../hoc/Aux/Aux";

class Homepage extends Component {

    state = {
        employers: null,
        error: false
    }

    componentDidMount() {
        axios.get('/portal/123/employment')
            .then(res => {
                console.log("fetched employers=", res.data.employers);
                this.setState({employers: res.data.employers});
            })
            .catch(error => {
                this.setState({error: true});
            });
    }

    render() {

        let employmentHistory = this.state.error ?
            <p style={{textAlign: 'center', fontSize: '1.3em'}}>Employment history cannot be loaded</p> : <Spinner />;
        if(this.state.employers) {
            employmentHistory = <EmploymentHistory employers={this.state.employers} />
        }

        return (
            <Aux>
                {employmentHistory}
            </Aux>
        );
    }
};

export default withErrorHandler(Homepage, axios);