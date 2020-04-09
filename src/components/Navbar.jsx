import React from 'react';

const Navbar = () => {
    return (
        <nav className="nav">
            <ul>
                <li><a href="#">Profile</a></li>
                <li><a href="#">Massages</a></li>
                <li><a href="#">News</a></li>
                <li><a href="#">Music</a></li>
            </ul>
            <div className="settings"><a href="#">Settings</a></div>
        </nav>
    )
}

export default Navbar;