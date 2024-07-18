import React from 'react'
import { NavLink } from 'react-router-dom';

import { Box, Grid, Paper, } from '@mui/material';

import CustomButton from '../../common/CustomButton';
import { Form, Formik } from 'formik';
import InputField from '../../common/InputField';
import CustomSelectField from '../../common/CustomSelectField';
import { facilitiesOptions, } from '../../../utils/RegisteredCarData';

const EditCarForm = () => {
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
      {/* form */}
      <Formik
        initialValues={{
          vehicleName: '',
          registrationNumber: '',
          chasisNumber: '',
          engineNumber: '',
          seats: '',
          tankCapacity: '',
          assignedDriver: '',
          status: '',
        }}
        // validationSchema={SignupSchema}
        onSubmit={(values) => {
          console.log(values);
        }}
      >
        {({ errors, touched }) => (
          <Form>
            <Box

              display={'flex'}
              flexDirection={'column'}
              rowGap={1.75}
            >

              <InputField labelName="Vehicle Name" fieldName="vehicleName" height={'42px'} width={'50%'} textFontSize={16} textFontWeight={'bold'} mb={0.5} borderRadius={'5px'} />
              <InputField labelName="Registration Number" fieldName="registrationNumber" height={'42px'} width={'50%'} textFontSize={16} textFontWeight={'bold'} mb={0.5} borderRadius={'5px'} />
              <InputField labelName="Chasis Number" fieldName="chasisNumber" height={'42px'} width={'50%'} textFontSize={16} textFontWeight={'bold'} mb={0.5} borderRadius={'5px'} />
              <InputField labelName="Engine Number" fieldName="engineNumber" height={'42px'} width={'50%'} textFontSize={16} textFontWeight={'bold'} mb={0.5} borderRadius={'5px'} />
              <InputField labelName="No. of Seats" fieldName="seats" height={'42px'} width={'50%'} textFontSize={16} textFontWeight={'bold'} mb={0.5} borderRadius={'5px'} />
              <InputField labelName="Fuel Tank Capacity" fieldName="tankCapacity" height={'42px'} width={'50%'} textFontSize={16} textFontWeight={'bold'} mb={0.5} borderRadius={'5px'} />
              <InputField labelName="Assigned Driver" fieldName="assignedDriver" height={'42px'} width={'50%'} textFontSize={16} textFontWeight={'bold'} mb={0.5} borderRadius={'5px'} />
              <InputField labelName="Status" fieldName="status" height={'42px'} width={'50%'} textFontSize={16} textFontWeight={'bold'} mb={0.5} borderRadius={'5px'} />

              <CustomSelectField fieldName={'facilities'} labelName={'Facilities'} options={facilitiesOptions} height={'42px'} width={'50%'} textFontSize={16} textFontWeight={'bold'} mb={0.5} borderRadius={'5px'} />

              <Grid container mt={2} mb={5} gap={5}>
                <Grid item xs={2.5}>
                  <CustomButton btnName={'Save'} width={'100%'} fontWeight={500} borderRadius={'5px'} />
                </Grid>
                <Grid item xs={2.5}>
                  <NavLink to={'/driver/cars'}>
                    <CustomButton btnName={'Cancel'} changeColor={true} width={'100%'} fontWeight={500} borderRadius={'5px'} />
                  </NavLink>
                </Grid>
              </Grid>
            </Box>
          </Form>
        )}
      </Formik>
    </Box>
  )
}

export default EditCarForm