import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={classes.nav}>
            <ul>
                <li className={classes.item}><a href="#">Profile</a></li>
                <li className={classes.item}><a href="#">Massages</a></li>
                <li className={classes.item}><a href="#">News</a></li>
                <li className={classes.item}><a href="#">Music</a></li>
            </ul>
            <div className={classes.settings}><a href="#">Settings</a></div>
        </nav>
    )
}

export default Navbar;