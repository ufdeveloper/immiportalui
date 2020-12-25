import React, {Component} from "react";

import classes from './AddTravel.css';
import Button from "../../UI/Button/Button";

class addTravel extends Component {

    state = {
        travel: {}
    }

    onExitDateChanged = (event) => {
        let travel = {...this.state.travel};
        travel['exitDate'] = event.target.value;
        console.log("onTitleChanged travel=", travel);
        this.setState({
            travel: travel
        });
    }

    onEnterDateChanged = (event) => {
        let travel = {...this.state.travel};
        travel['enterDate'] = event.target.value;
        console.log("onNameChanged travel=", travel);
        this.setState({
            travel: travel
        });
    }

    onPortOfEntryChanged = (event) => {
        let travel = {...this.state.travel};
        travel['portOfEntry'] = event.target.value;
        console.log("onStartDateChanged travel=", travel);
        this.setState({
            travel: travel
        });
    }

    render() {
        return (
            <form>
                <div className="form-group">
                    <label htmlFor="exitDate">Exit Date</label>
                    <input type="text"
                           className="form-control"
                           id="exitDate"
                           placeholder="Exit Date"
                           value={this.state.travel['exitDate'] || ''}
                           onChange={this.onExitDateChanged}/>
                </div>
                <div className="form-group">
                    <label htmlFor="enterDate">Enter Date</label>
                    <input type="text" className="form-control" id="enterDate" placeholder="Enter Date"
                           value={this.state.travel['enterDate'] || ''}
                           onChange={this.onEnterDateChanged}/>
                </div>
                <div className="form-group">
                    <label htmlFor="portOfEntry">Port Of Entry</label>
                    <input type="text" className="form-control" id="portOfEntry" placeholder="Port Of Entry"
                           value={this.state.travel['portOfEntry'] || ''}
                           onChange={this.onPortOfEntryChanged}/>
                </div>
                <Button clicked={(event) => this.props.addTravelSubmitted(event, this.state.travel)}>Submit</Button>
                <Button clicked={this.props.dismissTravelModalClicked}>Cancel</Button>
            </form>
        );
    }
};

export default addTravel;