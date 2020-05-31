import React, {Component} from 'react';
import { uuid } from 'uuidv4';
import Travel from "./Travel/Travel";
import Button from '../UI/Button/Button';

import classes from './TravelHistory.css';
import Modal from "../UI/Modal/Modal";
import AddTravel from "./AddTravel/AddTravel";
import axios from '../../axios-employmentHistory';
import Spinner from "../UI/Spinner/Spinner";
import withErrorHandler from "../../hoc/withErrorHandler/withErrorHandler";

class TravelHistory extends Component {

    state = {
        travels: null,
        error: false,
        fetched: false,
        addingTravel: false,
        addedTravel: false
    }

    addTravelHandler = () => {
        this.setState({addingTravel: true});
    }

    dismissTravelModalHandler = () => {
        this.setState({addingTravel: false});
    }

    addTravelSubmittedHandler = (event, travel) => {
        event.preventDefault();
        travel['id'] = uuid();
        console.log("travel=", travel);

        axios.post('/portal/123/travel', travel)
            .then(res => {
                console.log("successfully added travel");
                this.setState({
                    addingTravel: false,
                    addedTravel: true
                });
            })
            .catch(err => {
                console.log("error saving travel, err=", err);
            })
    }

    componentDidMount() {

        console.log("TravelHistory:componentDidMount");

        axios.get('/portal/123/travel')
            .then(res => {
                console.log("fetched travel data=", res.data);
                console.log("fetched travels=", res.data.travelHistory);
                this.setState({travels: res.data.travelHistory, fetched: true});
            })
            .catch(error => {
                this.setState({error: true, fetched: true});
            });
    }

    componentDidUpdate(prevProps, prevState) {

        console.log("TravelHistory:componentDidUpdate");
        console.log("this.state.addedTravel=", this.state.addedTravel);
        console.log("prevState.addedTravel=", prevState.addedTravel);

        if(this.state.addedTravel != prevState.addedTravel) {
            axios.get('/portal/123/travel')
                .then(res => {
                    console.log("fetched travels=", res.data.travelHistory);
                    this.setState({travels: res.data.travelHistory, fetched: true});
                })
                .catch(error => {
                    this.setState({error: true, fetched: true});
                });
            this.setState({addedTravel: false});
        }
    }

    render() {

        console.log("TravelHistory:render");

        let travelHistory = this.state.error ?
            <p style={{textAlign: 'center', fontSize: '1.3em'}}>Travel history cannot be loaded</p> : <Spinner />;
        if(this.state.fetched && !this.state.error) {
            travelHistory =
                <div>
                    <p style={{textAlign: 'center', fontSize: '1.3em'}}>Please Add Travel History</p>
                </div>
        }

        if(this.state.travels && this.state.travels.length > 0) {
            travelHistory =
                        this.state.travels
                            .map(travel => {
                                return <Travel
                                    key={travel.id}
                                    exitDate={travel.exitDate}
                                    enterDate={travel.enterDate}
                                    portOfEntry={travel.portOfEntry} />;
                            });
        }

        return (
            <div className={classes.TravelHistory}>
                <Modal
                    show={this.state.addingTravel}
                    dismissModalHandler={this.dismissTravelModalHandler} >
                    <AddTravel
                        addTravelSubmitted={this.addTravelSubmittedHandler}
                        dismissTravelModalClicked={this.dismissTravelModalHandler} />
                </Modal>
                {travelHistory}
                <Button clicked={this.addTravelHandler}>Add Travel</Button>
            </div>

        );
    }
};

export default withErrorHandler(TravelHistory, axios);