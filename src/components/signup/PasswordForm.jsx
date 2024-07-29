import React, { useState } from 'react';
import { ErrorMessage, Field, Form, Formik } from 'formik';
import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, IconButton, InputAdornment, TextField, Typography, Modal, CircularProgress } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { colors } from '../../utils/colors';
import ConfirmationModalContent from '../common/ConfirmationModalContent';
import CustomButton from '../common/CustomButton';
import HumsafarLogo from '../common/HumsafarLogo';
import { PasswordSchema } from '../../utils/constants';
import { userSignupThunk } from '../../redux/thunks/authThunk';

const PasswordForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const { loading } = useSelector((state) => state.auth);

  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    navigate('/login');
  }

  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  const handleToggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <Box display="flex" flexDirection="column" rowGap={5}>
      <ToastContainer position="top-right" autoClose={7000} />
      <HumsafarLogo />
      <Formik
        initialValues={{
          password: '',
          confirmPassword: '',
        }}
        validationSchema={PasswordSchema}
        onSubmit={async (values) => {
          try {
            const { password } = values;
            const role = 'Owner';
            const userCrm = true;
            const signup = {
              data: {
                ...location.state,
                password,
                role,
                userCrm,
              }
            }
            await dispatch(userSignupThunk(signup.data)).unwrap();
            // open Thank you modal
            handleOpen();

            // clear value
            values.password = '';
            values.confirmPassword = '';
          } catch (error) {
            console.error('Error while SignUp:', error);
            if (error.statusCode === 409) {
              toast.error('A user with the same email or contact number already exists. Please try again!', {
                onClose: () => navigate('/signup/personal-info'),
              });
            }
          }
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Box display="flex" flexDirection="column" rowGap={2}>
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
                      borderRadius: '8px',
                      height: '48px',
                      fontSize: showPassword ? '' : '1.75rem'
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
              <Box>
                <Typography variant="body2" mb={0.5}>Confirm Password</Typography>
                <Field
                  name="confirmPassword"
                  as={TextField}
                  variant="outlined"
                  fullWidth
                  type={showConfirmPassword ? 'text' : 'password'}
                  error={!!errors['confirmPassword'] && touched['confirmPassword']}
                  helperText={<ErrorMessage name="confirmPassword" />}
                  sx={{
                    '& .MuiOutlinedInput-root': {
                      borderRadius: '8px',
                      height: '48px',
                      fontSize: showConfirmPassword ? '' : '1.75rem'
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
              <Box textAlign={'center'}>
                {loading
                  ? <CircularProgress />
                  : <CustomButton btnName="Continue" mt={4} />
                }
              </Box>
              <Modal
                open={open}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  backdropFilter: 'blur(5px)',
                }}
              >
                <ConfirmationModalContent
                  title={"Account Successfully Created"}
                  subTitle={"We will contact you after approval"}
                  titleColor={colors.textTertiaryColor}
                  subTitleColor={colors.textTertiaryColor}
                  handleClose={handleClose}
                />
              </Modal>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default PasswordForm;
