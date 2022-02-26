import React, { useEffect, useContext } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';

import GlobalContext from '../GlobalContext';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

function NavBarComponent() {
    const navigate = useNavigate();

    const {token, setToken, user, setUser} = useContext(GlobalContext);

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <nav>
                        <Button sx={{ color: 'white' }} type='contained' onClick={() => navigate('/')}>Home</Button>
                        { user != '' ?
                        <>
                            <Button sx={{ color: 'white' }} type='contained' onClick={() => navigate('/manage')}>Manage</Button>
                            <Button sx={{ color: 'white' }} type='contained' onClick={() => navigate('/inventory')}>Inventory</Button>
                            <Button sx={{ color: 'white' }} type='contained' onClick={() => navigate('/cash')}>Cash</Button>
                        </>
                        : false }
                    </nav>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBarComponent