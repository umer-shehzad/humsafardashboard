import React, { useEffect, useState } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { Box, CircularProgress, Grid, Paper } from '@mui/material';

import CustomButton from '../../common/CustomButton';
import { Form, Formik } from 'formik';
import InputField from '../../common/InputField';
import CustomSelectField from '../../common/CustomSelectField';
import { facilitiesOptions, statusOptions } from '../../../utils/RegisteredCarData';
import { editOwnerVehiclesThunk } from '../../../redux/thunks/editOwnerVehiclesThunk';
import { useDispatch, useSelector } from 'react-redux';

const EditCarForm = () => {
  const location = useLocation();
  const { singleVehicleData } = location.state || {};
  const [statusSelectedValue, setStatusSelectedValue] = useState('');
  const [facilitiesSelectedValue, setFacilitiesSelectedValue] = useState([]);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { loading } = useSelector((state) => state.ownerVehicles);

  useEffect(() => {
    localStorage.setItem('singleVehicleID', singleVehicleData?.id);
  }, [])

  // console.log('single Vehicle Data', singleVehicleData);

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
        enableReinitialize
        initialValues={{
          make: singleVehicleData?.make || '',
          registrationNumber: singleVehicleData?.registrationNumber || '',
          chasisNumber: singleVehicleData?.chasisNumber || '',
          engineNumber: singleVehicleData?.engineNumber || '',
          totalSeats: singleVehicleData?.totalSeats || '',
          fuelTankCapacity: singleVehicleData?.fuelTankCapacity || '',
          assignedDriver: '',
          isActive: singleVehicleData?.isActive || '',
          facilities: singleVehicleData?.facilities || [],
        }}
        onSubmit={async (values) => {
          // Prepare payload by filtering out empty or undefined values
          const filteredValues = Object.fromEntries(
            Object.entries(values).filter(([key, value]) =>
              value !== '' && value !== undefined && (Array.isArray(value) ? value.length > 0 : true)
            )
          );

          try {
            await dispatch(editOwnerVehiclesThunk(filteredValues)).unwrap();

            navigate('/driver/cars')
          } catch (error) {
            console.error('Error while Edit Vehicle:', error);
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
              <InputField type={'text'} labelName="Vehicle Name" fieldName="make" height={'42px'} width={'50%'} textFontSize={16} textFontWeight={'bold'} mb={0.5} borderRadius={'5px'} touched={touched} errors={errors} />
              <InputField type={'text'} labelName="Registration No." fieldName="registrationNumber" height={'42px'} width={'50%'} textFontSize={16} textFontWeight={'bold'} mb={0.5} borderRadius={'5px'} touched={touched} errors={errors} />
              <InputField type={'text'} labelName="Chasis No." fieldName="chasisNumber" height={'42px'} width={'50%'} textFontSize={16} textFontWeight={'bold'} mb={0.5} borderRadius={'5px'} touched={touched} errors={errors} />
              <InputField type={'text'} labelName="Engine No." fieldName="engineNumber" height={'42px'} width={'50%'} textFontSize={16} textFontWeight={'bold'} mb={0.5} borderRadius={'5px'} touched={touched} errors={errors} />
              <InputField type={'text'} labelName="No. of Seats" fieldName="totalSeats" height={'42px'} width={'50%'} textFontSize={16} textFontWeight={'bold'} mb={0.5} borderRadius={'5px'} touched={touched} errors={errors} />
              <InputField type={'number'} labelName="Fuel Tank Capacity" fieldName="fuelTankCapacity" height={'42px'} width={'50%'} textFontSize={16} textFontWeight={'bold'} mb={0.5} borderRadius={'5px'} touched={touched} errors={errors} />
              <InputField type={'text'} labelName="Assigned Driver" fieldName="assignedDriver" height={'42px'} width={'50%'} textFontSize={16} textFontWeight={'bold'} mb={0.5} borderRadius={'5px'} touched={touched} errors={errors} />

              {/* <CustomSelectField
                fieldName={'isActive'}
                labelName={'Status'}
                options={statusOptions}
                height={'42px'}
                width={'50%'}
                textFontSize={16}
                textFontWeight={'bold'}
                mb={0.5}
                borderRadius={'5px'}
                setSelectedValue={setStatusSelectedValue}
                touched={touched}
                errors={errors}
              /> */}
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

              <Grid container mt={2} mb={5} gap={5}>
                <Grid item xs={2.5} textAlign={'center'}>
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
                <Grid item xs={2.5}>
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
              </Grid>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  );
};

export default EditCarForm;
