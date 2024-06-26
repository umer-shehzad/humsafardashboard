import React from 'react';
import { Button, TextField, Typography, Box, Container } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Height } from '@mui/icons-material';
import InputField from '../common/InputField';
import CustomButton from '../common/CustomButton';

// const SignupSchema = Yup.object().shape({
//     userName: Yup.string()
//         .required('User Name is required'),
//     email: Yup.string()
//         .email('Invalid email')
//         .required('Email is required'),
//     contact: Yup.string()
//         .required('Contact is required'),
//     gender: Yup.string()
//         .required('Gender is required'),
//     age: Yup.number()
//         .required('Age is required')
//         .positive('Age must be a positive number')
//         .integer('Age must be an integer'),
// });

const PasswordForm = () => {
    return (
        <Box display={'flex'} flexDirection={'column'} rowGap={5}>
            {/* logo */}
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
                <Box
                    component="img"
                    sx={{ width: '65%' }}
                    alt="Logo"
                    src="/signup/logo.png"
                />
            </Box>

            {/* form */}
            <Formik
                initialValues={{
                    password: '',
                    confirmPassword: '',
                }}
                // validationSchema={SignupSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <Box display={'flex'} flexDirection={'column'} rowGap={2}>

                            <InputField labelName="Password" fieldName="password" />
                            <InputField labelName="Confirm Password" fieldName="confirmPassword" />

                            <CustomButton btnName={'Continue'} />
                        </Box>
                    </Form>
                )}
            </Formik>
        </Box>
    );
};

export default PasswordForm;
