import React from 'react';

import classes from './Logo.css';
import appLogo from '../../assets/images/logo.png';

const logo = (props) => (
    <div className={classes.Logo}>
        <img src={appLogo} />
    </div>
);

export default logo;