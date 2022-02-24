import React, { useEffect } from 'react';
import {useLocation, useNavigate} from 'react-router-dom';
import Cookie from 'js-cookie';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';

function NavBarComponent() {
    const navigate = useNavigate();

    // useEffect(() => {
    //     let userCookie = Cookie.get('user');
    //     if(userCookie){
    //         console.log(JSON.parse(userCookie));
    //     }
    // }, []);

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <nav>
                        <Button sx={{ color: 'white' }} type='contained' onClick={() => navigate('/')}>Home</Button>
                        <Button sx={{ color: 'white' }} type='contained' onClick={() => navigate('/manage')}>Manage</Button>
                        <Button sx={{ color: 'white' }} type='contained' onClick={() => navigate('/inventory')}>Inventory</Button>
                        <Button sx={{ color: 'white' }} type='contained' onClick={() => navigate('/cash')}>Cash</Button>
                    </nav>
                </Toolbar>
            </Container>
        </AppBar>
    )
}

export default NavBarComponent