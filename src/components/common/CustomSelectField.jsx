import React from 'react';
import { Field } from 'formik';
import { Box, FormControl, MenuItem, Select, Typography } from '@mui/material';

const CustomSelectField = ({
  fieldName,
  labelName,
  options,
  placeholder,
  placeholderColor,
  placeholderFontSize,
  textFontSize,
  textFontWeight,
  mb,
  borderRadius,
  width,
  height,
  setSelectedValue
}) => {
  return (
    <Box>
      <Field name={fieldName}>
        {({ field, form }) => {
          const isPlaceholder = field.value === '';
          return (
            <FormControl fullWidth>
              <Typography fontSize={textFontSize} fontWeight={textFontWeight} mb={mb}>
                {labelName}
              </Typography>
              <Select
                labelId={`${fieldName}-label`}
                id={fieldName}
                {...field}
                value={field.value || ""}
                displayEmpty
                onChange={(event) => {
                  const value = event.target.value;
                  setSelectedValue(value);
                  form.setFieldValue(fieldName, value);
                }}
                renderValue={(selected) => {
                  if (selected === "") {
                    return <span style={{ color: placeholderColor, fontSize: placeholderFontSize }}>{placeholder}</span>;
                  }
                  return options.find(option => option.value === selected)?.label;
                }}
                sx={{
                  borderRadius: borderRadius,
                  width: width,
                  height: height,
                }}
              >
                <MenuItem 
                  value="" 
                  disabled
                >
                  {placeholder}
                </MenuItem>
                {options.map((option) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          );
        }}
      </Field>
    </Box>
  );
};

export default CustomSelectField;
