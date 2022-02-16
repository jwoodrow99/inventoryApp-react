import React from 'react';
import {Link, useLocation} from 'react-router-dom';

function NavBarComponent() {

    const location = useLocation();
    console.log(location.pathname);

    return (
        <nav>
            {location.pathname === '/' ? <Link style={{color: 'tomato'}} to='/'>Home</Link> : <Link to='/'>Home</Link>}
            {location.pathname === '/manage' ? <Link style={{color: 'tomato'}} to='/manage'>Manage</Link> : <Link to='/manage'>Manage</Link>}
            {location.pathname === '/item' ? <Link style={{color: 'tomato'}} to='/item'>Item</Link> : <Link to='/item'>Item</Link>}
            {location.pathname === '/cash' ? <Link style={{color: 'tomato'}} to='/cash'>Cash</Link> : <Link to='/cash'>Cash</Link>}

            <br/>

            <Link style={{color: location.pathname === '/' ? 'tomato' : false}} to='/'>Home</Link>
            <Link style={{color: location.pathname === '/manage' ? 'tomato' : false}} to='/manage'>Manage</Link>
            <Link style={{color: location.pathname === '/item' ? 'tomato' : false}} to='/item'>Item</Link>
            <Link style={{color: location.pathname === '/cash' ? 'tomato' : false}} to='/cash'>Cash</Link>

        </nav>
    )
}

export default NavBarComponent