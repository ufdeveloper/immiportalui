import React from 'react';
import NavigationItem from './NavigationItem/NavigationItem';

import classes from './NavigationItems.css';

const navigationItems = (props) => (
    <ul className={classes.NavigationItems}>
        <NavigationItem link="/" active>Employment History</NavigationItem>
        <NavigationItem link="/">Travel History</NavigationItem>
        <NavigationItem link="/">Education History</NavigationItem>
        <NavigationItem link="/">Employment Documents</NavigationItem>
    </ul>
);

export default navigationItems;