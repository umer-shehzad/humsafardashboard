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

const PersonalInfoForm = () => {
    return (
        <Box display={'flex'} flexDirection={'column'} columnGap={3}>
            {/* Title */}
            <Typography variant="h5" fontWeight={600}>
                Sign Up
            </Typography>

            {/* sub-title */}
            <Typography variant="caption" mb={3}>
                Already have an account?
                <Button
                    variant="text"
                    sx={{
                        textTransform: 'none',
                        color: 'black',
                        fontSize: 'caption.fontSize',
                        '&:hover': {
                            backgroundColor: 'transparent',
                        }
                    }}>
                    Sign up
                </Button>
            </Typography>

            {/* form */}
            <Formik
                initialValues={{
                    userName: '',
                    email: '',
                    contact: '',
                    gender: '',
                    age: '',
                }}
                // validationSchema={SignupSchema}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <Box display={'flex'} flexDirection={'column'} rowGap={1.25}>

                            <InputField labelName="User Name" fieldName="userName"/>
                            <InputField labelName="Email" fieldName="email"/>
                            <InputField labelName="Contact" fieldName="contact"/>
                            <InputField labelName="Gender" fieldName="gender"/>
                            <InputField labelName="Age" fieldName="age"/>

                            <CustomButton btnName={'Continue'}/>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Box>
    );
};

export default PersonalInfoForm;
