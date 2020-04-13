import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <ul>
                <li className={s.item}><a href="#">Profile</a></li>
                <li className={s.item}><a href="#">Massages</a></li>
                <li className={s.item}><a href="#">News</a></li>
                <li className={s.item}><a href="#">Music</a></li>
            </ul>
            <div className={s.settings}><a href="#">Settings</a></div>
        </nav>
    )
}

export default Navbar;