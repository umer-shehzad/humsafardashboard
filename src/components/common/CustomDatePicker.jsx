import React from 'react';
import { Field } from 'formik';
import { Box, Typography, TextField, InputAdornment } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider, DatePicker } from '@mui/x-date-pickers';
import CalendarMonthOutlinedIcon from '@mui/icons-material/CalendarMonthOutlined';

const CustomDatePicker = ({
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
        <Typography fontSize={textFontSize} fontWeight={textFontWeight} mb={mb}>
          {labelName}
        </Typography>
        <Field name={fieldName}>
          {({ field, form }) => (
            <DatePicker
              {...field}
              label={placeholder}
              value={field.value}
              onChange={(date) => form.setFieldValue(fieldName, date)}
              sx={{
                width: width,
                '& .css-nxo287-MuiInputBase-input-MuiOutlinedInput-input': {
                  height: height,
                  boxSizing: 'border-box'
                }
              }}
            />
          )}
        </Field>
      </Box>
    </LocalizationProvider>
  );
};

export default CustomDatePicker;
