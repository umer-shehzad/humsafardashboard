import React from 'react';

import { Box, Modal } from '@mui/material';
import { Formik, Form } from 'formik';

import ConfirmationModalContent from '../common/ConfirmationModalContent';
import CustomButton from '../common/CustomButton';

import { colors } from '../../utils/colors';

import HumsafarLogo from '../common/HumsafarLogo';
import InputField from '../common/InputField';

const ForgotPasswordForm = () => {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <Box display="flex" flexDirection="column" rowGap={6} mb={2}>
            {/* Humsafar Logo */}
            <Box>
                <HumsafarLogo />
            </Box>

            {/* Form */}
            <Formik
                initialValues={{
                    email: '',
                }}
                onSubmit={(values) => {
                    console.log(values);
                }}
            >
                {({ errors, touched }) => (
                    <Form>
                        <Box display="flex" flexDirection="column" rowGap={4}>
                            {/* Email Field */}
                            <Box>
                                <InputField labelName={'Email'} fieldName={'email'} height={'48px'} placeholder={"Enter your Email Address"} />
                            </Box>
                            {/* Done Button */}
                            <Box mt={1}>
                                <CustomButton btnName="Done" onClick={handleOpen} />
                            </Box>
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
                                    title={"Check Your Email"}
                                    subTitle={"hamnaayub234@gmail.com"}
                                    titleColor={colors.textTertiaryColor}
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

export default ForgotPasswordForm;
