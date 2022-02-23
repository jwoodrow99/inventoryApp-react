import React from 'react';
import {Link, useLocation} from 'react-router-dom';

function NavBarComponent() {

    const location = useLocation();

    return (
        <div>
            <nav>
                <Link style={{color: location.pathname === '/' ? 'tomato' : false}} to="/">Home</Link>
                <Link style={{color: location.pathname === '/about' ? 'tomato' : false}} to="/about">About</Link>
            </nav>

            <br/>

            <div>{location.pathname}</div>
        </div>
    )
}

export default NavBarComponent