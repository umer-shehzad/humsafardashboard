import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';

import { Box, CircularProgress, Grid, Paper } from '@mui/material';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import CustomButton from '../../common/CustomButton';
import { Form, Formik } from 'formik';
import InputField from '../../common/InputField';
import CustomSelectField from '../../common/CustomSelectField';
import { facilitiesOptions, vehicleTypeOptions } from '../../../utils/RegisteredCarData';
import UploadImage from '../../common/UploadImage';
import { colors } from '../../../utils/colors';
import { AddVehicleSchema } from '../../../utils/constants';
import { useDispatch, useSelector } from 'react-redux';
import { imageUploadThunk } from '../../../redux/thunks/imageThunk';
import { addOwnerVehiclesThunk } from '../../../redux/thunks/addOwnerVehiclesThunk';

const AddCarForm = () => {
  const [registrationCardFront, setRegistrationCardFront] = useState('');
  const [registrationCarBack, setregistrationCardBack] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [vechileTypeSelectedValue, setVechileTypeSelectedValue] = useState('');
  const [facilitiesSelectedValue, setFacilitiesSelectedValue] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.ownerVehicles);

  const handleRegistrationImageUpload = async (files) => {
    setIsLoading(true);
    try {
      const frontFile = files[0];
      const backFile = files[1];

      const frontResponse = await dispatch(imageUploadThunk({ file: frontFile })).unwrap();
      setRegistrationCardFront(frontResponse);

      if (backFile) {
        const backResponse = await dispatch(imageUploadThunk({ file: backFile })).unwrap();
        setregistrationCardBack(backResponse);
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
      {/* form */}
      <Formik
        initialValues={{
          registrationNumber: '',
          chasisNumber: '',
          engineNumber: '',
          make: '',
          makerName: '',
          totalSeats: '',
          fuelTankCapacity: '',
          vehicleOwnerName: '',
          vehicleOwnerCNIC: '',
          vehicleOwnerContactNumber: '',
          vehicleOwnerAddress: '',
          horsepower: '',
          transportType: '',
          vehicleType: '',
          facilities: [],
        }}
        validationSchema={AddVehicleSchema}
        onSubmit={async (values) => {
          if (!registrationCardFront || !registrationCarBack) {
            toast.error('Please upload Registration Card (Front & Back) images');
            return;
          }
          // Prepare payload by filtering out empty or undefined values
          const filteredValues = Object.fromEntries(
            Object.entries(values).filter(([key, value]) =>
              value !== '' && value !== undefined && (Array.isArray(value) ? value.length > 0 : true)
            )
          );

          const payload = { ...filteredValues, registrationCardFront, registrationCarBack };
          try {
            await dispatch(addOwnerVehiclesThunk(payload)).unwrap();

            navigate('/driver/cars')
          } catch (error) {
            console.error('Error while Add Vehicle:', error);
            if (error) {
              toast.error(error.message);
            }
          }
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Box
              display={'flex'}
              flexDirection={'column'}
              rowGap={1.75}
            >
              <InputField type={'text'} labelName="Registration Number" fieldName="registrationNumber" height={'42px'} width={'50%'} textFontSize={16} textFontWeight={'bold'} mb={0.5} borderRadius={'5px'} touched={touched} errors={errors} />
              <InputField type={'number'} labelName="No. of Seats" fieldName="totalSeats" height={'42px'} width={'50%'} textFontSize={16} textFontWeight={'bold'} mb={0.5} borderRadius={'5px'} touched={touched} errors={errors} />
              <InputField type={'text'} labelName="Chasis Number" fieldName="chasisNumber" height={'42px'} width={'50%'} textFontSize={16} textFontWeight={'bold'} mb={0.5} borderRadius={'5px'} touched={touched} errors={errors} />
              <InputField type={'text'} labelName="Make" fieldName="make" height={'42px'} width={'50%'} textFontSize={16} textFontWeight={'bold'} mb={0.5} borderRadius={'5px'} touched={touched} errors={errors} />
              <InputField type={'text'} labelName="Maker Name" fieldName="makerName" height={'42px'} width={'50%'} textFontSize={16} textFontWeight={'bold'} mb={0.5} borderRadius={'5px'} touched={touched} errors={errors} />
              <InputField type={'text'} labelName="Engine Number" fieldName="engineNumber" height={'42px'} width={'50%'} textFontSize={16} textFontWeight={'bold'} mb={0.5} borderRadius={'5px'} touched={touched} errors={errors} />
              <InputField type={'number'} labelName="Fuel Tank Capacity" fieldName="fuelTankCapacity" height={'42px'} width={'50%'} textFontSize={16} textFontWeight={'bold'} mb={0.5} borderRadius={'5px'} touched={touched} errors={errors} />
              <InputField type={'text'} labelName="Vehicle Owner Name" fieldName="vehicleOwnerName" height={'42px'} width={'50%'} textFontSize={16} textFontWeight={'bold'} mb={0.5} borderRadius={'5px'} touched={touched} errors={errors} />
              <InputField type={'text'} labelName="Vehicle Owner CNIC" fieldName="vehicleOwnerCNIC" height={'42px'} width={'50%'} textFontSize={16} textFontWeight={'bold'} mb={0.5} borderRadius={'5px'} touched={touched} errors={errors} />
              <InputField type={'text'} labelName="Vehicle Owner Contact No." fieldName="vehicleOwnerContactNumber" height={'42px'} width={'50%'} textFontSize={16} textFontWeight={'bold'} mb={0.5} borderRadius={'5px'} touched={touched} errors={errors} />
              <InputField type={'text'} labelName="Vehicle Owner Address" fieldName="vehicleOwnerAddress" height={'42px'} width={'50%'} textFontSize={16} textFontWeight={'bold'} mb={0.5} borderRadius={'5px'} touched={touched} errors={errors} />
              <InputField type={'text'} labelName="Horse Power" fieldName="horsepower" height={'42px'} width={'50%'} textFontSize={16} textFontWeight={'bold'} mb={0.5} borderRadius={'5px'} touched={touched} errors={errors} />
              <InputField type={'text'} labelName="Transport Type" fieldName="transportType" height={'42px'} width={'50%'} textFontSize={16} textFontWeight={'bold'} mb={0.5} borderRadius={'5px'} touched={touched} errors={errors} />

              <CustomSelectField
                fieldName={'vehicleType'}
                labelName={'Vehicle Type'}
                options={vehicleTypeOptions}
                height={'42px'}
                width={'50%'}
                textFontSize={16}
                textFontWeight={'bold'}
                mb={0.5}
                borderRadius={'5px'}
                setSelectedValue={setVechileTypeSelectedValue}
                touched={touched}
                errors={errors}
              />
              <CustomSelectField
                fieldName={'facilities'}
                labelName={'Facilities'}
                options={facilitiesOptions}
                height={'42px'}
                width={'50%'}
                textFontSize={16}
                textFontWeight={'bold'}
                mb={0.5}
                borderRadius={'5px'}
                setSelectedValue={setFacilitiesSelectedValue}
                touched={touched}
                errors={errors}
                multipleValues={true}
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
                onImageUpload={handleRegistrationImageUpload}
                disabled={isLoading || loading}
              />

              <Grid container mt={2} mb={5} gap={5} justifyContent={isLoading ? 'center' : 'flex-start'} width={'50%'}>
                {isLoading
                  ? <CircularProgress />
                  : <>
                    <Grid item xs={4.5} textAlign={'center'}>
                      {loading
                        ? <CircularProgress />
                        : <CustomButton
                          btnName={'Save'}
                          width={'100%'}
                          fontWeight={500}
                          borderRadius={'5px'}
                        />
                      }
                    </Grid>
                    <Grid item xs={4.5}>
                      <NavLink to={'/driver/cars'}>
                        <CustomButton
                          btnName={'Cancel'}
                          changeColor={true}
                          width={'100%'}
                          fontWeight={500}
                          borderRadius={'5px'}
                          disabled={loading}
                        />
                      </NavLink>
                    </Grid>
                  </>
                }
              </Grid>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default AddCarForm;
