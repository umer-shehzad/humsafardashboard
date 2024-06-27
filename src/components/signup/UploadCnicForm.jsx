import React, { useState, useEffect } from 'react';
import { Box, Button, Typography, LinearProgress, IconButton } from '@mui/material';
import { useDropzone } from 'react-dropzone';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import DeleteIcon from '@mui/icons-material/Delete';
import CloseIcon from '@mui/icons-material/Close';
import CustomButton from '../common/CustomButton';

const UploadCnicForm = () => {
    const [files, setFiles] = useState([]);
    const { getRootProps, getInputProps, open, acceptedFiles } = useDropzone({
        noClick: true,
        noKeyboard: true,
        onDrop: (acceptedFiles) => {
            const filesWithProgress = acceptedFiles.map(file => ({
                file,
                progress: 0,
                uploaded: false,
            }));
            setFiles(prevFiles => [...prevFiles, ...filesWithProgress]);
        }
    });

    useEffect(() => {
        files.forEach((fileObj, index) => {
            if (!fileObj.uploaded && fileObj.progress === 0) {
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

    return (
        <Box display="flex" flexDirection="column" rowGap={5} mt={ files.length > 0 && 13}>
            {/* Humsafar Logo */}
            <Box display="flex" alignItems="center" justifyContent="center">
                <Box
                    component="img"
                    sx={{ width: '65%' }}
                    alt="Logo"
                    src="/signup/logo.png"
                />
            </Box>

            {/* Upload File */}
            <Box>
                {/* Title */}
                <Box display={'flex'} columnGap={1} mb={1}>
                    <Typography fontSize={18}>
                        Upload Your CNIC
                    </Typography>
                    <Typography fontSize={18} color={'#858585'}>
                        (front and back)
                    </Typography>
                </Box>

                {/* upload file code */}
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
                        <Box
                            component="img"
                            sx={{ width: '40%' }}
                            alt="Drag and Drop"
                            src="/signup/draganddrop.png"
                        />
                        <Typography fontSize={18} fontWeight={600}>OR</Typography>
                        <Button
                            variant="contained"
                            onClick={open}
                            sx={{
                                textTransform: 'none',
                                backgroundColor: '#E58600',
                                color: 'white',
                                width: '42%',
                            }}
                        >
                            Upload File
                        </Button>
                    </Box>
                </Box>
            </Box>

            {/* Selected Files */}
            {files.length > 0 && (
                <Box>
                    {/* title */}
                    <Box display={'flex'}>
                        <Typography fontSize={18} fontWeight={600}>
                            Selected Files
                        </Typography>
                        <Typography fontSize={18} color={'#858585'}>
                            ({files.length})
                        </Typography>
                    </Box>

                    {/* show upload files */}
                    <Box>
                        {files.map((fileObj, index) => (
                            <Box key={fileObj.file.path}>
                                {/* Main Content */}
                                <Box display="flex" alignItems="center" mt={3}>
                                    {/* Image logo */}
                                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} border={2} borderColor={'#858585'} borderRadius={20} width={32} height={32} mr={1}>
                                        <Box
                                            component="img"
                                            alt="Logo"
                                            src="/signup/upload-img-logo.png"
                                        />
                                    </Box>

                                    {/* image details */}
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

                                    {/* Delete & Close Icon */}
                                    <Box display="flex" alignItems="center">
                                        {fileObj.uploaded ? (
                                            <IconButton onClick={() => removeFile(index)} size="small">
                                                <DeleteIcon fontSize="small" />
                                            </IconButton>
                                        ) : (
                                            <>
                                                <IconButton onClick={() => removeFile(index)} size="small">
                                                    <CloseIcon fontSize="small" />
                                                </IconButton>
                                            </>
                                        )}
                                    </Box>
                                </Box>

                                {/* Progress Bar */}
                                <Box display="flex" alignItems="center">
                                    {fileObj.uploaded ? (
                                        ''
                                    ) : (
                                        <>
                                            <LinearProgress
                                                variant="determinate"
                                                value={fileObj.progress}
                                                sx={{ width: '100%', }}
                                            />
                                        </>
                                    )}
                                </Box>
                            </Box>
                        ))}
                    </Box>

                    {/* Continue Button */}
                    <Box mb={3} mt={6}>
                        <CustomButton btnName={'Continue'} width={'95%'} />
                    </Box>
                </Box>
            )}
        </Box>
    );
};

export default UploadCnicForm;
