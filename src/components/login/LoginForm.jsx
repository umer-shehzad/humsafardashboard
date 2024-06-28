import React, { useState } from 'react';
import { Box, Typography, TextField, IconButton, InputAdornment, Button, Checkbox, FormControlLabel } from '@mui/material';
import { Formik, Form, Field } from 'formik';
import { Visibility, VisibilityOff } from '@mui/icons-material';

import CustomButton from '../common/CustomButton';
import HumsafarLogo from '../common/HumsafarLogo';
import InputField from '../common/InputField';

import { colors } from '../../utils/colors';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleSignInClick = () => {
        console.log('SignInCLick');
        navigate("/forgot-password");
    }

    return (
        <Box display="flex" flexDirection="column" rowGap={3}>
            {/* Humsafar Logo */}
            <Box>
                <HumsafarLogo />
            </Box>

            <Box display={'flex'} flexDirection={'column'} alignItems={'center'} justifyContent={'center'}>
                {/* Title */}
                <Typography fontSize={45} fontWeight={700}>
                    Welcome Back
                </Typography>
                {/* Sub Title */}
                <Typography fontSize={20} fontWeight={400} color={colors.textForthColor}>
                    Please Login to your account
                </Typography>
            </Box>

            {/* Form */}
            <Formik
                initialValues={{
                    email: '',
                    password: '',
                    rememberMe: false,
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <Box display="flex" flexDirection="column" rowGap={2}>
                            <Box>
                                <Box display={'flex'} flexDirection={'column'} rowGap={2}>
                                    {/* Email Field */}
                                    <InputField labelName={'Email'} fieldName={'email'} height={'48px'} />

                                    {/* Password Field */}
                                    <Box>
                                        <Typography variant="body2" mb={0.5}>Password</Typography>
                                        <Field
                                            name="password"
                                            as={TextField}
                                            variant="outlined"
                                            fullWidth
                                            type={showPassword ? 'text' : 'password'}
                                            sx={{
                                                '& .MuiOutlinedInput-root': {
                                                    borderRadius: '12px',
                                                    height: '48px',
                                                    fontSize: !showPassword && '1.75rem'
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
                                </Box>

                                {/* Remember Me and Forgot Password */}
                                <Box display="flex" justifyContent="space-between" alignItems="center" mt={0.5}>
                                    <Field
                                        name="rememberMe"
                                        as={FormControlLabel}
                                        control={<Checkbox
                                            sx={{
                                                // color: 'black',
                                                '&.Mui-checked': {
                                                    color: `${colors.textForthColor}`,
                                                },
                                                '&:hover': {
                                                    backgroundColor: 'transparent',
                                                },
                                            }}
                                        />}
                                        label="Remember Me"
                                    />
                                    <Button
                                        variant="text"
                                        sx={{
                                            textTransform: 'none',
                                            color: 'black',
                                            fontSize: '14px',
                                            fontWeight: '400',
                                            padding: 0,
                                            '&:hover': {
                                                backgroundColor: 'transparent',
                                            },
                                        }}
                                    >
                                        Forgot Password ?
                                    </Button>
                                </Box>

                            </Box>

                            {/* Sign In Button */}
                            <Box mt={1}>
                                <CustomButton btnName="Sign In" onClick={handleSignInClick} />
                            </Box>
                        </Box>
                    </Form>
                )}
            </Formik>

            {/* Don't have an account */}
            <Box display={'flex'} alignItems={'center'} justifyContent={'center'} mt={2}>
                <Typography fontSize={16} fontWeight={400} mb={1.5}>
                    Don't have an Account?
                    <Button
                        variant="text"
                        sx={{
                            textTransform: 'none',
                            color: `${colors.btnBgColor}`,
                            fontSize: '16px',
                            fontWeight: '400',
                            paddingLeft: 1,
                            '&:hover': {
                                backgroundColor: 'transparent',
                            }
                        }}>
                        Sign Up
                    </Button>
                </Typography>
            </Box>
        </Box>
    );
}

export default LoginForm;
