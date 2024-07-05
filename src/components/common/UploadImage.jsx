import React, { useCallback, useState } from 'react';
import { Box, Typography, Button, IconButton } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CustomButton from './CustomButton';
import CloseIcon from '@mui/icons-material/Close';
import { colors } from '../../utils/colors';

const UploadImage = ({ 
  labelName,
  textFontSize,
  textFontWeight,
  mb,
  borderRadius,
  width,
  height,
  selectImgWidth
}) => {
  const [file, setFile] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      setFile(acceptedFiles[0]);
    }
  }, []);

  const handleRemoveFile = () => {
    setFile(null);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Box>
      <Typography fontSize={textFontSize} fontWeight={textFontWeight} mb={mb}>{labelName}</Typography>
      <Box
        {...getRootProps()}
        sx={{
          border: '2px dashed #ccc',
          padding: '20px',
          textAlign: 'center',
          cursor: 'pointer',
          backgroundColor: isDragActive ? '#f0f0f0' : '#fff',
          position: 'relative',
          borderRadius: borderRadius,
          width: width,
          height: height
        }}
      >
        <input {...getInputProps()} />
        <IconButton>
          <CameraAltIcon sx={{ color: colors.imageIconColor }} />
        </IconButton>
        <CustomButton btnName={'Upload'} width={'70%'} height={'30px'} fontWeight={500} borderRadius={'5px'} />
      </Box>

      {file && (
        <Box mt={2} p={1} width={selectImgWidth} border="1px solid #ccc" borderRadius="4px" display="flex" justifyContent="space-between" alignItems="center">
          <Typography variant="body2" color="textSecondary">{file.name}</Typography>
          <IconButton size="small" onClick={handleRemoveFile}>
            <CloseIcon />
          </IconButton>
        </Box>
      )}
    </Box >
  );
};

export default UploadImage;
