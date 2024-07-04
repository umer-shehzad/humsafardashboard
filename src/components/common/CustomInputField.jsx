import React from 'react';
import { Field } from 'formik';

import { Box, TextField } from '@mui/material';

const CustomInputField = ({ type, fieldName, height, placeholder }) => {
    return (
        <Box>
            <Field
                name={fieldName}
                as={TextField}
                variant="outlined"
                type={type}
                placeholder={placeholder}
                // fullWidth
                // error={touched.userName && !!errors.userName}
                // helperText={touched.userName && errors.userName}
                InputProps={{
                    sx: {
                        '& .MuiInputBase-input::placeholder': {
                            fontSize: '14px', 
                        },
                    },
                }}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        height: height || '42px',
                        borderRadius: '12px'
                    }
                }}
            />
        </Box>
    )
}

export default CustomInputField
