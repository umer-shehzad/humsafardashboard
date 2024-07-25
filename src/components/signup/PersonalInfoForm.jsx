import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Form, Formik } from 'formik';

import { Box, Button, Typography } from '@mui/material';

import CustomButton from '../common/CustomButton';
import InputField from '../common/InputField';
import { SignupSchema } from '../../utils/constants';

const PersonalInfoForm = () => {
  const navigate = useNavigate();

  return (
    <Box display={'flex'} flexDirection={'column'}>
      {/* Title */}
      <Typography fontSize={28} fontWeight={600}>
        Sign Up
      </Typography>

      {/* sub-title */}
      <Typography fontSize={14} fontWeight={400} mb={1.5}>
        Already have an account?
        <Button
          variant="text"
          disableRipple
          disableFocusRipple
          sx={{
            textTransform: 'none',
            color: 'black',
            fontSize: '14px',
            fontWeight: '400',
            minWidth: '54px',
            padding: 0,
            height: '30px',
            '&:hover': {
              backgroundColor: 'transparent',
            }
          }}>
          Sign in
        </Button>
      </Typography>

      {/* form */}
      <Formik
        initialValues={{
          name: '',
          email: '',
          contactNumber: '',
          gender: '',
          age: '',
        }}
        validationSchema={SignupSchema}
        onSubmit={(values) => {
          navigate('/signup/upload-cnic', { state: values });
          
          // clear values
          values.name = '';
          values.email = ''
          values.contactNumber = '';
          values.gender = '';
          values.age = '';
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Box display={'flex'} flexDirection={'column'} rowGap={1.75}>

              <InputField
                type="text"
                labelName="User Name"
                fieldName="name"
                textFontSize={'14px'}
                mb={0.5}
                borderRadius={'12px'}
                height={'42px'}
                touched={touched}
                errors={errors}
              />
              <InputField
                type="email"
                labelName="Email"
                fieldName="email"
                textFontSize={'14px'}
                mb={0.5}
                borderRadius={'12px'}
                height={'42px'}
                touched={touched}
                errors={errors}
              />
              <InputField
                type="text"
                labelName="Contact"
                fieldName="contactNumber"
                textFontSize={'14px'}
                mb={0.5}
                borderRadius={'12px'}
                height={'42px'}
                touched={touched}
                errors={errors}
              />
              <InputField
                type="text"
                labelName="Gender"
                fieldName="gender"
                textFontSize={'14px'}
                mb={0.5}
                borderRadius={'12px'}
                height={'42px'}
                touched={touched}
                errors={errors}
              />
              <InputField
                type="number"
                labelName="Age"
                fieldName="age"
                textFontSize={'14px'}
                mb={0.5}
                borderRadius={'12px'}
                height={'42px'}
                touched={touched}
                errors={errors}
              />

              <CustomButton btnName={'Continue'} mt={3.75} />
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default PersonalInfoForm;
