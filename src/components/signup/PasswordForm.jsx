import React, { useState } from 'react';
import { Box, Typography, TextField, IconButton, InputAdornment } from '@mui/material';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import CustomButton from '../common/CustomButton';



const PasswordForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleToggleConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <Box display="flex" flexDirection="column" rowGap={5}>
            {/* Logo */}
            <Box display="flex" alignItems="center" justifyContent="center">
                <Box
                    component="img"
                    sx={{ width: '65%' }}
                    alt="Logo"
                    src="/signup/logo.png"
                />
            </Box>

            {/* Form */}
            <Formik
                initialValues={{
                    password: '',
                    confirmPassword: '',
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <Box display="flex" flexDirection="column" rowGap={2}>

                            {/* Password Field */}
                            <Box>
                                <Typography variant="body2" mb={0.5}>Password</Typography>
                                <Field
                                    name="password"
                                    as={TextField}
                                    variant="outlined"
                                    fullWidth
                                    type={showPassword ? 'text' : 'password'}
                                    // error={!!errors['password'] && touched['password']}
                                    // helperText={<ErrorMessage name="password" />}
                                    sx={{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '8px',
                                            height: '42px',
                                            fontSize: showPassword ? '' : '2rem'
                                        }
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={handleTogglePassword}
                                                    edge="end"
                                                    size="large"
                                                    sx={{
                                                        color: 'black',
                                                        '&:hover': {
                                                            backgroundColor: 'transparent',
                                                        },
                                                        '& svg': {
                                                            fontSize: '1.5rem'
                                                        }
                                                    }}
                                                >
                                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Box>

                            {/* Confirm Password Field */}
                            <Box>
                                <Typography variant="body2" mb={0.5}>Confirm Password</Typography>
                                <Field
                                    name="confirmPassword"
                                    as={TextField}
                                    variant="outlined"
                                    fullWidth
                                    type={showConfirmPassword ? 'text' : 'password'}
                                    // error={!!errors['confirmPassword'] && touched['confirmPassword']}
                                    // helperText={<ErrorMessage name="confirmPassword" />}
                                    sx= {{
                                        '& .MuiOutlinedInput-root': {
                                            borderRadius: '8px',
                                            height: '42px',
                                            fontSize: showConfirmPassword ? '' : '2rem'
                                        }
                                    }}
                                    InputProps={{
                                        endAdornment: (
                                            <InputAdornment position="end">
                                                <IconButton
                                                    onClick={handleToggleConfirmPassword}
                                                    edge="end"
                                                    size="large"
                                                    sx={{
                                                        color: 'black',
                                                        '&:hover': {
                                                            backgroundColor: 'transparent',
                                                        },
                                                        '& svg': {
                                                            fontSize: '1.5rem'
                                                        }
                                                    }}
                                                >
                                                    {showConfirmPassword ? <VisibilityOff /> : <Visibility />}
                                                </IconButton>
                                            </InputAdornment>
                                        ),
                                    }}
                                />
                            </Box>

                            {/* Continue Button */}
                            <CustomButton btnName="Continue" />
                        </Box>
                    </Form>
                )}
            </Formik>
        </Box>
    );
};

export default PasswordForm;
