import React from 'react';
import { Field } from 'formik';
import { Box, FormControl, InputLabel, MenuItem, Select } from '@mui/material';

const CustomSelectField = ({ fieldName, label, options }) => {
    return (
        <Box>
            <Field name={fieldName}>
                {({ field, form }) => (
                    <FormControl fullWidth>
                        {/* <InputLabel id={`${fieldName}-label`}>{label}</InputLabel> */}
                        <Select
                            labelId={`${fieldName}-label`}
                            id={fieldName}
                            {...field}
                            label={label}
                            onChange={(event) => {
                                form.setFieldValue(fieldName, event.target.value);
                            }}
                        >
                            {options.map((option) => (
                                <MenuItem key={option.value} value={option.value}>
                                    {option.label}
                                </MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                )}
            </Field>
        </Box>
    );
};

export default CustomSelectField;
