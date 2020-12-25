import React from 'react';
import Logo from '../../Logo/Logo';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';

import classes from './Toolbar.css';

const toolbar = (props) => (
    <header className={classes.Toolbar}>
        <DrawerToggle toggleClickHandler={props.toggleClickHandler}/>
        <div className={classes.Logo}>
            <Logo/>
        </div>
    </header>
);

export default toolbar;