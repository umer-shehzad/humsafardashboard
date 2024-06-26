import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import PersonalInfoForm from '../../components/signup/PersonalInfoForm';

export default function PersonalInfo() {
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
            email: data.get('email'),
            password: data.get('password'),
        });
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
                >
                    <Box
                        component="img"
                        sx={{ width: '65%', height: '65vh', display: { xs: 'none', lg: 'block' } }}
                        alt="Logo"
                        src="/signup/pic1.png"
                    />
                </Grid>

                {/* Form */}
                <Grid item xs={12} sm={8} md={5} lg={5} >
                    <Box
                        sx={{
                            display: 'flex',
                            flexDirection: 'column',
                        }}
                    >

                        <PersonalInfoForm />

                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
}