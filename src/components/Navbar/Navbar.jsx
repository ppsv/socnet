import React from 'react';
import s from './Navbar.module.css';

const Navbar = () => {
    return <nav className={s.nav}>
        <div>Profile</div>
        <div>Messagies</div>
        <div>News</div>
        <div>Other</div>

    </nav>
}

export default Navbar;