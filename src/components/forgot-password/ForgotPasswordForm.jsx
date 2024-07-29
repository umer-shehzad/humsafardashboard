import React from 'react';
import { Form, Formik } from 'formik';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Box, CircularProgress, Modal } from '@mui/material';

import { colors } from '../../utils/colors';
import ConfirmationModalContent from '../common/ConfirmationModalContent';
import CustomButton from '../common/CustomButton';
import HumsafarLogo from '../common/HumsafarLogo';
import InputField from '../common/InputField';
import { ForgotEmailSchema } from '../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { forgotThunk } from '../../redux/thunks/forgotThunk';

const ForgotPasswordForm = () => {
  const [open, setOpen] = React.useState(false);
  const [email, setEmail] = React.useState('');
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.forgotPassword);

  const handleOpen = () => setOpen(true);

  const handleClose = () => {
    setOpen(false);
    navigate('/login');
  }

  return (
    <Box display="flex" flexDirection="column" rowGap={6} mb={2}>
      <ToastContainer position="top-right" autoClose={5000} />
      {/* Humsafar Logo */}
      <Box>
        <HumsafarLogo />
      </Box>

      {/* Form */}
      <Formik
        initialValues={{
          email: '',
        }}
        validationSchema={ForgotEmailSchema}
        onSubmit={async (values) => {
          try {
            const { email } = values;

            await dispatch(forgotThunk({ email })).unwrap();
            setEmail(email);

            handleOpen();

            // clear values
            // values.email = '';
          } catch (error) {
            console.error('Error while Forgot Password:', error);
            if (error.message === 'Internal server error') {
              toast.error('Wrong Email. Please try again!');
            }
          }
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Box display="flex" flexDirection="column" rowGap={4}>
              {/* Email Field */}
              <Box>
                <InputField
                  labelName={'Email'}
                  fieldName={'email'}
                  height={'48px'}
                  placeholder={"Enter your Email Address"}
                  touched={touched}
                  errors={errors}
                />
              </Box>
              {/* Done Button */}
              <Box textAlign={'center'} mt={1}>
                {loading
                  ? <CircularProgress />
                  : <CustomButton btnName="Done" />
                }
              </Box>
              {/* Modal */}
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
                  title={"Check Your Email"}
                  titleColor={colors.textTertiaryColor}
                  handleClose={handleClose}
                  email={email}
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
