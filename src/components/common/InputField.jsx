import React from 'react'
import { Box, Typography, TextField  } from '@mui/material';
import { Field } from 'formik';

const InputField = ({ labelName, fieldName }) => {
    return (
        <Box>
            <Typography variant="body2" mb={0.5}>{labelName}</Typography>
            <Field
                name={fieldName}
                as={TextField}
                variant="outlined"
                fullWidth
                // error={touched.userName && !!errors.userName}
                // helperText={touched.userName && errors.userName}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        height: '42px',
                        borderRadius: '8px'
                    }
                }}
            />
        </Box>
    )
}

export default InputField
