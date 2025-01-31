import React, { useState } from 'react';
import { ErrorMessage,Field, Form, Formik } from 'formik';

import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Box, IconButton, InputAdornment,TextField, Typography } from '@mui/material';
import { Modal, } from '@mui/material';

import { colors } from '../../utils/colors';
import ConfirmationModalContent from '../common/ConfirmationModalContent';
import CustomButton from '../common/CustomButton';
import HumsafarLogo from '../common/HumsafarLogo';

const PasswordForm = () => {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const handleTogglePassword = () => {
        setShowPassword(!showPassword);
    };

    const handleToggleConfirmPassword = () => {
        setShowConfirmPassword(!showConfirmPassword);
    };

    return (
        <Box display="flex" flexDirection="column" rowGap={5}>
            {/* Humsafar Logo */}
            <HumsafarLogo />

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

                            {/* Continue Button */}
                            <CustomButton btnName="Continue" mt={4} onClick={handleOpen} />

                            {/* Modal */}
                            <Modal
                                open={open}
                                onClose={handleClose}
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
