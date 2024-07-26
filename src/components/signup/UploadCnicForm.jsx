import React, { useEffect, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useNavigate, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Box, Button, CircularProgress, IconButton, LinearProgress, Typography } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import CloseIcon from '@mui/icons-material/Close';
import DeleteIcon from '@mui/icons-material/Delete';
import { colors } from '../../utils/colors';
import CustomButton from '../common/CustomButton';
import HumsafarLogo from '../common/HumsafarLogo';
import CustomImage from '../common/CustomImage';
import { imageUploadThunk } from '../../redux/thunks/imageThunk';

const UploadCnicForm = () => {
  const [files, setFiles] = useState([]);
  const [images, setImages] = useState([]);
  const dispatch = useDispatch();
  const { isLoading } = useSelector((state) => state.image);
  const navigate = useNavigate();
  const location = useLocation();

  const { getRootProps, getInputProps, open } = useDropzone({
    noClick: true,
    noKeyboard: true,
    maxFiles: 2,
    onDrop: async (acceptedFiles) => {
      const filesWithProgress = acceptedFiles.map(file => ({
        file,
        progress: 0,
        uploaded: false,
      }));
      setFiles(prevFiles => [...prevFiles, ...filesWithProgress].slice(0, 2));

      const uploadFile = async (file) => {
        try {
          const response = await dispatch(imageUploadThunk({file})).unwrap();
          setImages(prevImages => [...prevImages, response]);
        } catch (error) {
          console.error('Error uploading image:', error);
        }
      };

      for (let i = 0; i < acceptedFiles.length; i++) {
        await uploadFile(acceptedFiles[i], i);
      }
    }
  });

  useEffect(() => {
    files.forEach((fileObj, index) => {
      if (!fileObj.uploaded && fileObj.progress < 100) {
        const simulateUpload = () => {
          setFiles(prevFiles => prevFiles.map((f, i) => {
            if (i === index) {
              const newProgress = Math.min(f.progress + Math.random() * 10, 100);
              return { ...f, progress: newProgress, uploaded: newProgress === 100 };
            }
            return f;
          }));
        };
        const uploadInterval = setInterval(simulateUpload, 500);
        if (fileObj.progress === 100) {
          clearInterval(uploadInterval);
        }
        return () => clearInterval(uploadInterval);
      }
    });
  }, [files]);

  const removeFile = (index) => {
    setFiles(files.filter((_, i) => i !== index));
  };

  const formatSize = (size) => {
    return (size / (1024 * 1024)).toFixed(2) + ' MB';
  };

  const handleContinueBtnClick = () => {
    const [cnicFront, cnicBack] = images
    navigate('/signup/password', {
      state: {
        ...location.state,
        cnicFront,
        cnicBack
      }
    });
  };

  return (
    <Box display="flex" flexDirection="column" rowGap={6} mt={files.length > 0 ? 13 : 0}>
      <HumsafarLogo />
      <Box>
        <Box display={'flex'} columnGap={1} mb={1}>
          <Typography fontSize={18} fontWeight={400}>
            Upload Your CNIC
          </Typography>
          <Typography fontSize={18} fontWeight={400} color={colors.textSecondaryColor}>
            (front and back)
          </Typography>
        </Box>
        <Box
          {...getRootProps()}
          sx={{
            border: '2px dashed #cccccc',
            padding: '20px',
            textAlign: 'center',
            cursor: 'pointer',
            borderRadius: '8px',
          }}
        >
          <input {...getInputProps()} />
          <Box display={'flex'} flexDirection={'column'} justifyContent={'center'} alignItems={'center'} rowGap={3} my={2}>
            <CustomImage
              src={'/signup/draganddrop.png'}
              alt={'Drag and Drop'}
              width='40%'
            />
            <Typography fontSize={18} fontWeight={600}>OR</Typography>
            <Button
              variant="contained"
              onClick={open}
              disabled={files.length >= 2}
              sx={{
                textTransform: 'none',
                fontSize: 18,
                fontWeight: 600,
                borderRadius: '8px',
                backgroundColor: files.length >= 2 ? '#cccccc' : `${colors.btnBgColor}`,
                color: `${colors.btnColor}`,
                boxShadow: 'none',
                width: '42%',
                height: '42px',
                '&:hover': {
                  backgroundColor: files.length >= 2 ? '#cccccc' : `${colors.btnBgColor}`,
                  boxShadow: 'none',
                }
              }}
            >
              Upload File
            </Button>
          </Box>
        </Box>
      </Box>
      {files.length > 0 && (
        <Box>
          <Box display={'flex'}>
            <Typography fontSize={18} fontWeight={600}>
              Selected Files
            </Typography>
            <Typography fontSize={18} color={colors.textSecondaryColor}>
              ({files.length})
            </Typography>
          </Box>
          <Box>
            {files.map((fileObj, index) => (
              <Box key={fileObj.file.path}>
                <Box display="flex" alignItems="center" mt={3}>
                  <Box display={'flex'} justifyContent={'center'} alignItems={'center'} border={2} borderColor={'#858585'} borderRadius={20} width={32} height={32} mr={1}>
                    <Box
                      component="img"
                      alt="Logo"
                      src="/signup/upload-img-logo.png"
                    />
                  </Box>
                  <Box flexGrow={1}>
                    <Typography fontSize={14} fontWeight={600}>
                      {fileObj.file.name}
                    </Typography>
                    {fileObj.uploaded ? (
                      <Typography display="flex" alignItems="center" fontSize={11.5} color={'#575757'}>
                        {formatSize(fileObj.file.size)}
                        <CheckCircleIcon sx={{ fontSize: '1rem', color: 'green', ml: 1 }} />
                      </Typography>
                    ) : (
                      <Typography>
                        {formatSize(fileObj.progress / 100 * fileObj.file.size)} out of {formatSize(fileObj.file.size)}
                      </Typography>
                    )}
                  </Box>
                  <Box display="flex" alignItems="center">
                    {fileObj.uploaded ? (
                      <IconButton onClick={() => removeFile(index)} size="small" disabled={isLoading}>
                        <DeleteIcon fontSize="small" />
                      </IconButton>
                    ) : (
                      <IconButton onClick={() => removeFile(index)} size="small">
                        <CloseIcon fontSize="small" />
                      </IconButton>
                    )}
                  </Box>
                </Box>
                <Box display="flex" alignItems="center">
                  {fileObj.uploaded ? (
                    ''
                  ) : (
                    <LinearProgress
                      variant="determinate"
                      value={fileObj.progress}
                      sx={{ width: '100%' }}
                    />
                  )}
                </Box>
              </Box>
            ))}
          </Box>
          <Box textAlign={'center'} mb={3} mt={6}>
            { ( (files.length === 2) & isLoading )
            ? <CircularProgress />
            :<CustomButton btnName={'Continue'} width={'95%'} onClick={handleContinueBtnClick} disabled={files.length < 2} />
            }
            </Box>
        </Box>
      )}
    </Box>
  );
};

export default UploadCnicForm;
