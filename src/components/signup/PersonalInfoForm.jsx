import React from 'react';
import { Button, TextField, Typography, Box, Container } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { Height } from '@mui/icons-material';
import InputField from '../common/InputField';
import CustomButton from '../common/CustomButton';
import { useNavigate } from 'react-router-dom';

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
    const navigate = useNavigate();

    const handleContinueBtnClick = () => {
        console.log("Sign Up Personal Info Click")
        navigate('/signup/upload-cnic')
    }
    
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
                        <Box display={'flex'} flexDirection={'column'} rowGap={1.75}>

                            <InputField labelName="User Name" fieldName="userName"/>
                            <InputField labelName="Email" fieldName="email"/>
                            <InputField labelName="Contact" fieldName="contact"/>
                            <InputField labelName="Gender" fieldName="gender"/>
                            <InputField labelName="Age" fieldName="age"/>

                            <CustomButton btnName={'Continue'} mt={3.75} onClick={handleContinueBtnClick}/>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Box>
    );
};

export default PersonalInfoForm;
