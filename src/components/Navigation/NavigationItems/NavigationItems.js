import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.css';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/employment">Employment History</NavigationItem>
        <NavigationItem link="/travel">Travel History</NavigationItem>
        <NavigationItem link="/education">Education History</NavigationItem>
        <NavigationItem link="/docs">Employment Documents</NavigationItem>
    </ul>
);

export default navigationItems;