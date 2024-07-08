import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Field,Form, Formik } from 'formik';
import * as Yup from 'yup';

import { Height } from '@mui/icons-material';
import { Box, Button, Container,TextField, Typography } from '@mui/material';

import CustomButton from '../common/CustomButton';
import InputField from '../common/InputField';

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

                            <InputField labelName="User Name" fieldName="userName" textFontSize={'14px'} mb={0.5} borderRadius={'12px'} height={'42px'}/>
                            <InputField labelName="Email" fieldName="email" textFontSize={'14px'} mb={0.5} borderRadius={'12px'} height={'42px'}/>
                            <InputField labelName="Contact" fieldName="contact" textFontSize={'14px'} mb={0.5} borderRadius={'12px'} height={'42px'}/>
                            <InputField labelName="Gender" fieldName="gender" textFontSize={'14px'} mb={0.5} borderRadius={'12px'} height={'42px'}/>
                            <InputField labelName="Age" fieldName="age" textFontSize={'14px'} mb={0.5} borderRadius={'12px'} height={'42px'}/>

                            <CustomButton btnName={'Continue'} mt={3.75} onClick={handleContinueBtnClick}/>
                        </Box>
                    </Form>
                )}
            </Formik>
        </Box>
    );
};

export default PersonalInfoForm;
