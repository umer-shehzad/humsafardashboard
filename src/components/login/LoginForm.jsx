import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, Button, Checkbox, CircularProgress, FormControlLabel, IconButton, InputAdornment, TextField, Typography } from '@mui/material';

import { colors } from '../../utils/colors';
import CustomButton from '../common/CustomButton';
import HumsafarLogo from '../common/HumsafarLogo';
import InputField from '../common/InputField';
import { LoginSchema } from '../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { loginThunk } from '../../redux/thunks/loginThunk';

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.login);

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleForgotPasswordClick = () => {
    navigate("/forgot-password");
  }

  const handleSignUpOnClick = () => {
    navigate('/signup/personal-info')
  }

  return (
    <Box display="flex" flexDirection="column" rowGap={3}>
      <ToastContainer position="top-right" autoClose={5000} />
      {/* Humsafar Logo */}
      <HumsafarLogo />

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
        validationSchema={LoginSchema}
        onSubmit={async (values) => {
          try {
            const { email, password, rememberMe } = values

            const response = await dispatch(loginThunk({ email, password })).unwrap();
            // store access token & profile pic
            localStorage.setItem('owner-token', response.access_token);
            localStorage.setItem('owner-profile-pic', response.profilePic);

            // store email & password based on remember me
            if (rememberMe) {
              const loginCredentials = {
                email: email,
                password: password
              }
              localStorage.setItem('login-credendials', JSON.stringify(loginCredentials));
            }

            navigate('/driver/dashboard');

            // clear values
            values.email = '';
            values.password = '';
          } catch (error) {
            console.error('Error while Login:', error);
            if (error.message === 'Invalid Credentials') {
              toast.error('Wrong Password. Please try again!');
            } else if (error.message === 'User not found') {
              toast.error('Invalid Credentials. Please try again!');
            }
          }
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Box display="flex" flexDirection="column" rowGap={2}>
              <Box>
                <Box display={'flex'} flexDirection={'column'} rowGap={2}>
                  {/* Email Field */}
                  <InputField
                    labelName={'Email'}
                    fieldName={'email'}
                    height={'48px'}
                    fontSize={'14px'}
                    mb={0.5}
                    borderRadius={'12px'}
                    touched={touched}
                    errors={errors}
                  />

                  {/* Password Field */}
                  <Box>
                    <Typography variant="body2" mb={0.5}>Password</Typography>
                    <Field
                      name="password"
                      as={TextField}
                      variant="outlined"
                      fullWidth
                      type={showPassword ? 'text' : 'password'}
                      error={!!errors['password'] && touched['password']}
                      helperText={<ErrorMessage name="password" />}
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
                    disableRipple
                    disableFocusRipple
                    onClick={handleForgotPasswordClick}
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
              <Box textAlign={'center'} mt={1}>
                {loading
                  ? <CircularProgress />
                  : <CustomButton btnName="Sign In" />
                }
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
            disableRipple
            disableFocusRipple
            onClick={handleSignUpOnClick}
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
