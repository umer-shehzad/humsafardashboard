import React, { useCallback, useState } from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import CustomButton from './CustomButton';
import CloseIcon from '@mui/icons-material/Close';
import { colors } from '../../utils/colors';
import { toast } from 'react-toastify';

const UploadImage = ({
  labelName,
  captionName,
  textFontSize,
  textFontWeight,
  mb,
  borderRadius,
  width,
  height,
  selectImgWidth,
  captionColor,
  onImageUpload,
  disabled
}) => {
  const [files, setFiles] = useState([]);

  const onDrop = useCallback((acceptedFiles) => {
    const newFiles = [...files, ...acceptedFiles];
    const validFiles = newFiles.filter(file => file.type === 'image/jpeg' || file.type === 'image/png');
    if (validFiles.length !== newFiles.length) {
      toast.error('Only jpeg or png files are allowed');
    }
    setFiles(validFiles);
    onImageUpload(validFiles);
  }, [files, onImageUpload]);

  const handleRemoveFile = (index) => {
    const newFiles = files.filter((_, i) => i !== index);
    setFiles(newFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <Box>
      <Box display={'flex'} alignItems={'center'} mb={mb}>
        <Typography fontSize={textFontSize} fontWeight={textFontWeight}>{labelName}</Typography>
        <Typography fontSize={14} fontWeight={textFontWeight} color={captionColor}>{captionName}</Typography>
      </Box>
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
        <CustomButton btnName={'Upload'} type={'button'} width={'70%'} height={'30px'} fontWeight={500} borderRadius={'5px'} disabled={files.length >= 2} />
      </Box>

      <Box display={'flex'} justifyContent={'space-between'} width={'50%'}>
        {files.map((file, index) => (
          <Box mt={2} p={1} width={selectImgWidth} border="1px solid #ccc" borderRadius="4px" display="flex" justifyContent="space-between" alignItems="center" key={index}>
            <Typography variant="body2" color="textSecondary">{file.name}</Typography>
            <IconButton size="small" onClick={() => handleRemoveFile(index)} disabled={disabled}>
              <CloseIcon />
            </IconButton>
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default UploadImage;
