import * as React from 'react';

import Box from '@mui/material/Box';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';

import PersonalInfoForm from '../../components/signup/PersonalInfoForm';
import CustomImage from '../../components/common/CustomImage';

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
    <Box display={'flex'} justifyContent={'center'} my={5} mx={18}>
      <Grid container component="main" columnGap={10}
      >
        <CssBaseline />
        {/* Image */}
        <Grid item xs={false} lg={6}>
          <CustomImage
            src={'/signup/pic1.png'}
            alt={'Logo'}
            height={'66vh'}
            sx={{ display: { xs: 'none', lg: 'block' } }}
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