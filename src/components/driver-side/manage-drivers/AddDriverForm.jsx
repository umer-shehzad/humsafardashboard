import React, { useState } from 'react';
import { Box, CircularProgress, Grid, Paper } from '@mui/material';
import { Form, Formik } from 'formik';
import InputField from '../../common/InputField';
import UploadImage from '../../common/UploadImage';
import CustomButton from '../../common/CustomButton';
import { colors } from '../../../utils/colors';
import { Link, useNavigate } from 'react-router-dom';
import { genderOptions } from '../../../utils/manageDriverData';
import CustomSelectField from '../../common/CustomSelectField';
import { AddDriverSchema } from '../../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { imageUploadThunk } from '../../../redux/thunks/imageThunk';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { addOwnerDriversThunk } from '../../../redux/thunks/addOwnerDriversThunk';

const AddDriverForm = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [cnicFront, setCnicFront] = useState('csdcdscd.com');
  const [cnicBack, setCnicBack] = useState('csdcdscd.com');
  const [licenseFront, setLicenseFront] = useState('csdcdscd.com');
  const [licenseBack, setLicenseBack] = useState('csdcdscd.com');
  const [isLoading, setIsLoading] = useState(false);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.ownerDrivers);

  const handleCnicImageUpload = async (files) => {
    setIsLoading(true);
    try {
      const frontFile = files[0];
      const backFile = files[1];

      const frontResponse = await dispatch(imageUploadThunk({ file: frontFile })).unwrap();
      setCnicFront(frontResponse);

      if (backFile) {
        const backResponse = await dispatch(imageUploadThunk({ file: backFile })).unwrap();
        setCnicBack(backResponse);
      }
    } catch (error) {
      toast.error('Failed to upload images');
    } finally {
      setIsLoading(false);
    }
  };

  const handleLicenseImageUpload = async (files) => {
    setIsLoading(true);
    try {
      const frontFile = files[0];
      const backFile = files[1];

      const frontResponse = await dispatch(imageUploadThunk({ file: frontFile })).unwrap();
      setLicenseFront(frontResponse);

      if (backFile) {
        const backResponse = await dispatch(imageUploadThunk({ file: backFile })).unwrap();
        setLicenseBack(backResponse);
      }
    } catch (error) {
      toast.error('Failed to upload images');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <Box
      component={Paper}
      elevation={0}
      borderRadius={0}
      width={'73%'}
      borderBottom={0}
      borderTop={0}
      borderLeft={4}
      borderRight={4}
      borderColor={'rgba(0,0,0,0.08)'}
      position={'absolute'}
      pt={5}
      pl={3}
      ml={3}
    >
      <ToastContainer position="top-right" autoClose={5000} />
      <Formik
        initialValues={{
          name: '',
          email: '',
          contactNumber: '',
          gender: '',
          age: '',
        }}
        validationSchema={AddDriverSchema}
        onSubmit={async (values) => {
          const role = 'Driver';
          const userCrm = true;
          const password = 'Random@1234'
          const payload = { ...values, password, role, userCrm, cnicFront, cnicBack, licenseFront, licenseBack }
          try {
            await dispatch(addOwnerDriversThunk( payload )).unwrap();

            navigate('/driver/manage-drivers')
          } catch (error) {
            console.error('Error while Add Driver:', error);
            if (error) {
              toast.error(error.message);
            }
          }
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Box display={'flex'} flexDirection={'column'} rowGap={1.75}>
              <InputField
                type={'text'}
                labelName="Driver's Name"
                fieldName="name"
                height={'42px'}
                width={'50%'}
                textFontSize={16}
                textFontWeight={'bold'}
                mb={0.5}
                borderRadius={'5px'}
                touched={touched}
                errors={errors}
              />
              <InputField
                type={'email'}
                labelName="Email Address"
                fieldName="email"
                height={'42px'}
                width={'50%'}
                textFontSize={16}
                textFontWeight={'bold'}
                mb={0.5}
                borderRadius={'5px'}
                touched={touched}
                errors={errors}
              />
              <InputField
                type={'tel'}
                labelName="Contact Number"
                fieldName="contactNumber"
                height={'42px'}
                width={'50%'}
                textFontSize={16}
                textFontWeight={'bold'}
                mb={0.5}
                borderRadius={'5px'}
                touched={touched}
                errors={errors}
              />
              <CustomSelectField
                labelName={'Gender'}
                fieldName={'gender'}
                options={genderOptions}
                height={'42px'}
                width={'50%'}
                textFontSize={16}
                textFontWeight={'bold'}
                mb={0.5}
                borderRadius={'5px'}
                setSelectedValue={setSelectedValue}
                touched={touched}
                errors={errors}
              />
              <InputField
                type={'number'}
                labelName="Age"
                fieldName="age"
                height={'42px'}
                width={'50%'}
                textFontSize={16}
                textFontWeight={'bold'}
                mb={0.5}
                borderRadius={'5px'}
                touched={touched}
                errors={errors}
              />

              <UploadImage
                labelName={'CNIC'}
                captionName={'(Front and Back)'}
                captionColor={colors.textninthColor}
                height={'20vh'}
                width={'48%'}
                textFontSize={16}
                textFontWeight={'bold'}
                mb={2}
                borderRadius={'10px'}
                selectImgWidth={'47%'}
                onImageUpload={handleCnicImageUpload}
                disabled={isLoading}
              />

              <UploadImage
                labelName={'License'}
                captionName={'(Front and Back)'}
                captionColor={colors.textninthColor}
                height={'20vh'}
                width={'48%'}
                textFontSize={16}
                textFontWeight={'bold'}
                mb={2}
                borderRadius={'10px'}
                selectImgWidth={'47%'}
                onImageUpload={handleLicenseImageUpload}
                disabled={isLoading}
              />

              <Grid container mt={2} mb={5} gap={5}>
                <Grid item xs={2.5} textAlign={'center'}>
                  {loading
                    ? <CircularProgress />
                    : <CustomButton
                      btnName={'Save'}
                      width={'100%'}
                      fontWeight={500}
                      borderRadius={'5px'}
                      disabled={isLoading}
                    />
                  }
                </Grid>
                <Grid item xs={2.5}>
                  <Link to={'/driver/manage-drivers'}>
                    <CustomButton
                      btnName={'Cancel'}
                      changeColor={true}
                      width={'100%'}
                      fontWeight={500}
                      borderRadius={'5px'}
                      disabled={isLoading}
                    />
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default AddDriverForm;
