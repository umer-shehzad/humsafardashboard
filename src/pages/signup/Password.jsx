import * as React from 'react';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';

import PasswordForm from '../../components/signup/PasswordForm';
import { colors } from '../../utils/colors';
import CustomImage from '../../components/common/CustomImage';

export default function Password() {
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
          <CustomImage
            src={'/signup/pic3.png'}
            alt={'Logo'}
            height={'60vh'}
            sx={{ display: { xs: 'none', lg: 'block' } }}
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