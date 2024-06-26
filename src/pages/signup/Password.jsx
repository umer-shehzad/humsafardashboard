import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import PasswordForm from '../../components/signup/PasswordForm';

export default function Password() {
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
                        sx={{ width: '80%', height: '55vh', display: { xs: 'none', lg: 'block' } }}
                        alt="Logo"
                        src="/signup/pic3.png"
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

                        <PasswordForm />

                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
}