import React from 'react';
import { Field } from 'formik';
import { Box, Typography, TextField } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, TimePicker } from '@mui/x-date-pickers';

const CustomTimePicker = ({
  labelName,
  fieldName,
  height,
  width,
  placeholder,
  textFontSize,
  textFontWeight,
  mb,
  borderRadius
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box>
        <Typography fontSize={textFontSize} fontWeight={textFontWeight} mb={mb}>{labelName}</Typography>
        <Field name={fieldName}>
          {({ field, form }) => (
            <TimePicker
              {...field}
              label={placeholder}
              sx={{
                width: width,
                '& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input': {
                  height: height,
                  boxSizing: 'border-box'
                }
              }}
              value={field.value}
              onChange={(time) => form.setFieldValue(fieldName, time)}
            />
          )}
        </Field>
      </Box>
    </LocalizationProvider>
  );
};

export default CustomTimePicker;
