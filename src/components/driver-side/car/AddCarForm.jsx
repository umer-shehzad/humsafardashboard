import React from 'react'
import { NavLink } from 'react-router-dom';

import { Box, Grid, Paper, Typography } from '@mui/material';

import CustomButton from '../../common/CustomButton';
import { Form, Formik } from 'formik';
import InputField from '../../common/InputField';
import CustomSelectField from '../../common/CustomSelectField';
import { facilitiesOptions, vehicleTypeOptions } from '../../../utils/RegisteredCarData';
import UploadImage from '../../common/UploadImage';
import { colors } from '../../../utils/colors';

const AddCarForm = () => {
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
      // height={'240vh'}
      // mx={'auto'}
      pt={5}
      pl={3}
      ml={3}
    >
      {/* form */}
      <Formik
        initialValues={{
          registrationNumber: '',
          chasisNumber: '',
          engineNumber: '',
          seats: '',
          tankCapacity: '',
          ownerName: '',
          ownerCnic: '',
          ownerNumber: '',
          ownerAddress: '',
          horsePower: '',
          transportType: '',
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

              <InputField labelName="Registration Number" fieldName="registrationNumber" height={'42px'} width={'50%'} textFontSize={16} textFontWeight={'bold'} mb={0.5} borderRadius={'5px'} />
              <InputField labelName="Chasis Number" fieldName="chasisNumber" height={'42px'} width={'50%'} textFontSize={16} textFontWeight={'bold'} mb={0.5} borderRadius={'5px'} />
              <InputField labelName="Engine Number" fieldName="engineNumber" height={'42px'} width={'50%'} textFontSize={16} textFontWeight={'bold'} mb={0.5} borderRadius={'5px'} />
              <InputField labelName="No. of Seats" fieldName="seats" height={'42px'} width={'50%'} textFontSize={16} textFontWeight={'bold'} mb={0.5} borderRadius={'5px'} />
              <InputField labelName="Fuel Tank Capacity" fieldName="tankCapacity" height={'42px'} width={'50%'} textFontSize={16} textFontWeight={'bold'} mb={0.5} borderRadius={'5px'} />
              <InputField labelName="Vehicle Owner Name" fieldName="name" height={'42px'} width={'50%'} textFontSize={16} textFontWeight={'bold'} mb={0.5} borderRadius={'5px'} />
              <InputField labelName="Vehicle Owner CNIC" fieldName="cnic" height={'42px'} width={'50%'} textFontSize={16} textFontWeight={'bold'} mb={0.5} borderRadius={'5px'} />
              <InputField labelName="Vehicle Owner Contact No." fieldName="number" height={'42px'} width={'50%'} textFontSize={16} textFontWeight={'bold'} mb={0.5} borderRadius={'5px'} />
              <InputField labelName="Vehicle Owner Address" fieldName="address" height={'42px'} width={'50%'} textFontSize={16} textFontWeight={'bold'} mb={0.5} borderRadius={'5px'} />
              <InputField labelName="Horse Power" fieldName="horsePower" height={'42px'} width={'50%'} textFontSize={16} textFontWeight={'bold'} mb={0.5} borderRadius={'5px'} />
              <InputField labelName="Transport Type" fieldName="transportType" height={'42px'} width={'50%'} textFontSize={16} textFontWeight={'bold'} mb={0.5} borderRadius={'5px'} />

              <CustomSelectField fieldName={'vehicleType'} labelName={'Vehicle Type'} options={vehicleTypeOptions} height={'42px'} width={'50%'} textFontSize={16} textFontWeight={'bold'} mb={0.5} borderRadius={'5px'} />
              <CustomSelectField fieldName={'ficilities'} labelName={'Facilities'} options={facilitiesOptions} height={'42px'} width={'50%'} textFontSize={16} textFontWeight={'bold'} mb={0.5} borderRadius={'5px'} />

              <UploadImage labelName={'Registration Card'} captionName={'(Front and Back)'} captionColor={colors.textninthColor} height={'20vh'} width={'48%'} textFontSize={16} textFontWeight={'bold'} mb={2} borderRadius={'10px'} selectImgWidth={'25%'} />

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

export default AddCarForm