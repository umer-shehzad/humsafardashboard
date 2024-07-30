import React from 'react';
import { Box, Grid } from '@mui/material';
import { Form, Formik } from 'formik';
import InputField from '../../common/InputField';
import { profileInputIcons } from '../../../utils/driverMenuData';

const UserDataForm = () => {
  const loginCredentials = JSON.parse(localStorage.getItem('login-credendials'));
  return (
    <Box marginLeft={4} mt={1}>
      <Formik
        initialValues={{
          email: loginCredentials.email,
          password: loginCredentials.password,
          registeredDrivers: '3',
          phoneNo: '03318658129',
          registeredCars: '3',
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Box display={'flex'} flexDirection={'column'} rowGap={1.75}>
              <Grid container justifyContent={'space-between'}>
                <Grid item xs={4.5}>
                  <Box display={'flex'} flexDirection={'column'} gap={4}>
                    <InputField
                      icon={profileInputIcons.emailIcon}
                      type={'email'}
                      labelName="Email"
                      fieldName="email"
                      height={'52px'}
                      width={'100%'}
                      textFontSize={16}
                      textFontWeight={'bold'}
                      mb={0.5}
                      borderRadius={'5px'}
                      disabled={true}
                      touched={touched}
                      errors={errors}
                    />
                    <InputField
                      icon={profileInputIcons.passwordIcon}
                      type={'password'}
                      labelName="Password"
                      fieldName="password"
                      height={'52px'}
                      width={'100%'}
                      textFontSize={16}
                      textFontWeight={'bold'}
                      mb={0.5}
                      borderRadius={'5px'}
                      disabled={true}
                      touched={touched}
                      errors={errors}
                    />
                    <InputField
                      icon={profileInputIcons.driverIcon}
                      type={'number'}
                      labelName="Registered Drivers"
                      fieldName="registeredDrivers"
                      height={'52px'}
                      width={'100%'}
                      textFontSize={16}
                      textFontWeight={'bold'}
                      mb={0.5}
                      borderRadius={'5px'}
                      disabled={true}
                      touched={touched}
                      errors={errors}
                    />
                  </Box>
                </Grid>
                <Grid item xs={4.5}>
                  <Box display={'flex'} flexDirection={'column'} gap={4}>
                    <InputField
                      icon={profileInputIcons.phoneIcon}
                      type={'tel'}
                      labelName="Phone No."
                      fieldName="phoneNo"
                      height={'52px'}
                      width={'100%'}
                      textFontSize={16}
                      textFontWeight={'bold'}
                      mb={0.5}
                      borderRadius={'5px'}
                      disabled={true}
                      touched={touched}
                      errors={errors}
                    />
                    <InputField
                      icon={profileInputIcons.carIcon}
                      type={'number'}
                      labelName="Registered Cars"
                      fieldName="registeredCars"
                      height={'52px'}
                      width={'100%'}
                      textFontSize={16}
                      textFontWeight={'bold'}
                      mb={0.5}
                      borderRadius={'5px'}
                      disabled={true}
                      touched={touched}
                      errors={errors}
                    />
                  </Box>
                </Grid>
              </Grid>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default UserDataForm;
