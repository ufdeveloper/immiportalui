import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';

import classes from './SideMenu.css';

const sideMenu = (props) => {
    return (
        <div className={classes.SideMenu}>
            <div className={classes.Logo}>
                <Logo />
            </div>
            <p style={{ fontSize: '1.3em', color: 'white', textAlign: 'center'}}>
                Immigration Portal
            </p>

            <nav>
                <NavigationItems />
            </nav>
        </div>
    );
};

export default sideMenu;