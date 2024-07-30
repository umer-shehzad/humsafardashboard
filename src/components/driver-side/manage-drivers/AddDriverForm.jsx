import React, { useState } from 'react';
import { Box, Grid, Paper } from '@mui/material';
import { Form, Formik } from 'formik';
import InputField from '../../common/InputField';
import UploadImage from '../../common/UploadImage';
import CustomButton from '../../common/CustomButton';
import { colors } from '../../../utils/colors';
import { Link } from 'react-router-dom';
import { genderOptions } from '../../../utils/manageDriverData';
import CustomSelectField from '../../common/CustomSelectField';
import { AddDriverSchema } from '../../../utils/constants';
import { useDispatch } from 'react-redux';
import { imageUploadThunk } from '../../../redux/thunks/imageThunk';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AddDriverForm = () => {
  const [selectedValue, setSelectedValue] = useState('');
  const [cnicFront, setCnicFront] = useState(null);
  const [cnicBack, setCnicBack] = useState(null);
  const [licenseFront, setLicenseFront] = useState(null);
  const [licenseBack, setLicenseBack] = useState(null);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  const handleCnicImageUpload = async (files) => {
    setLoading(true);
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
      setLoading(false);
    }
  };

  const handleLicenseImageUpload = async (files) => {
    setLoading(true);
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
      setLoading(false);
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
        onSubmit={(values) => {
          const role = 'Driver';
          const userCrm = true;
          console.log('Add Driver Data', { ...values, role, userCrm, cnicFront, cnicBack, licenseFront, licenseBack });
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
                labelName={'Registration Card'}
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
                disabled={loading}
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
                disabled={loading}
              />

              <Grid container mt={2} mb={5} gap={5}>
                <Grid item xs={2.5}>
                  <CustomButton
                    btnName={'Save'}
                    width={'100%'}
                    fontWeight={500}
                    borderRadius={'5px'}
                    disabled={loading}
                  />
                </Grid>
                <Grid item xs={2.5}>
                  <Link to={'/driver/manage-drivers'}>
                    <CustomButton
                      btnName={'Cancel'}
                      changeColor={true}
                      width={'100%'}
                      fontWeight={500}
                      borderRadius={'5px'}
                      disabled={loading}
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
