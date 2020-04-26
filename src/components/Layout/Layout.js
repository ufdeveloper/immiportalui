import React, {Component} from 'react';
import Aux from '../../hoc/Aux/Aux';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

import classes from './Layout.css';

class Layout extends Component {

    state = {
        showSideDrawer: false
    };

    sideDrawerClosedHandler = () => {
        this.setState({
            showSideDrawer: false
        });
    };

    sideDrawerDisplayHandler = () => {
        this.setState((prevState) => {
            return {
                showSideDrawer: !prevState.showSideDrawer
            }
        });
    };

    render() {
        return (
            <Aux>
                <Toolbar toggleClickHandler={this.sideDrawerDisplayHandler}/>
                <SideDrawer
                    showSideDrawer={this.state.showSideDrawer}
                    sideDrawerClosedHandler={this.sideDrawerClosedHandler} />
                <main className={classes.Content}>
                    {this.props.children}
                </main>
            </Aux>
        )
    }
};

export default Layout;