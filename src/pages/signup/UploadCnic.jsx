import React from 'react';

import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import UploadCnicForm from '../../components/signup/UploadCnicForm';

import { colors } from '../../utils/colors';

export default function UploadCnic() {

    return (
        <Box
            display={'flex'}
            alignItems={'center'}
            justifyContent={'center'}
            height={'100vh'}
            sx={{
                position: 'relative',
                background: `linear-gradient(to bottom right, transparent 70%, ${colors.gradientColor})`,
                overflow: 'hidden',
            }}
        >
            <Grid container component="main" columnGap={10}
                sx={{
                    height: { lg: '100vh', xs: '100vh' },
                    width: '85%'
                }}
            >
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    lg={6}
                    mt={13}
                // my={'auto'}
                >
                    {/* Image */}
                    <Box
                        component="img"
                        alt="Logo"
                        src="/signup/pic2.png"
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

                        <UploadCnicForm />

                    </Box>
                </Grid>

            </Grid>
        </Box>
    );
}