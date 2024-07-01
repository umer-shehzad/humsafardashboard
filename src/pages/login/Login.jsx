import * as React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import LoginForm from '../../components/login/LoginForm';

export default function Login() {
    const handleSubmit = (event) => {
        // event.preventDefault();
        // const data = new FormData(event.currentTarget);
        // console.log({
        //     email: data.get('email'),
        //     password: data.get('password'),
        // });
    };

    return (
        <Box display={'flex'} alignItems={'center'} justifyContent={'center'} height={'100vh'}>
            <Grid container component="main" columnGap={10}
                sx={{
                    height: { lg: '85vh', xs: '100vh' },
                    width: '85%'
                }}
            >
                <CssBaseline />
                {/* Image */}
                <Grid
                    item
                    xs={false}
                    lg={6}
                    my={'auto'}
                >
                    <Box
                        component="img"
                        sx={{ height: '65vh', display: { xs: 'none', lg: 'block' } }}
                        alt="Login Image"
                        src="/login/pic1.png"
                    />
                </Grid>

                {/* Form */}
                <Grid item xs={12} sm={8} md={5} lg={5} my={'auto'}>
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >

                        <LoginForm />

                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
}