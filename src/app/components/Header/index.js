import React from 'react';
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <nav className="navbar is-transparent is-danger is-fixed-top">
            <div className="navbar-brand">
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <Link to="/" className="navbar-item">
                    Home
                </Link>
                <Link to="/product" className="navbar-item">
                    Product
                </Link>
            </div>
        </nav>
    );
}

export default Header;
