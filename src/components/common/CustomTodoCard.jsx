import React from 'react';
import { Box, Typography, Checkbox } from '@mui/material';
import { CiEdit } from "react-icons/ci";
import { colors } from '../../utils/colors';

const CustomTodoCard = () => {
    return (
        <Box
            bgcolor={colors.todoColor1}
            mt={1}
            mr={1}
            sx={{
            }}
        >
            <Box
                display={'flex'}
                flexDirection={'column'}
                gap={2}
                py={4}
            >
                {/* Heading */}
                <Box display={'flex'} alignItems={'center'} gap={2} ml={6}>
                    <Box
                        component={'img'}
                        src={'/driver/maintenance.svg'}
                    />
                    <Box display={'flex'} gap={29}>
                        <Typography variant="subtitle2" fontWeight={'bold'}>Car Maintenance</Typography>
                        <CiEdit size={20} />
                    </Box>
                </Box>

                {/* todo list */}
                <Box pl={11.5}>
                    <Box display={'flex'} alignItems={'center'} gap={1}>
                        <Checkbox
                            color="primary"
                            sx={{
                                padding: '0px',
                                '& .MuiSvgIcon-root': {
                                    fontSize: '1rem',
                                },
                            }}
                        />
                        <Typography variant="subtitle2">Check and oil change</Typography>
                    </Box>
                    <Box display={'flex'} alignItems={'center'} gap={1}>
                        <Checkbox
                            color="primary"
                            sx={{
                                padding: '0px',
                                '& .MuiSvgIcon-root': {
                                    fontSize: '1rem',
                                },
                            }}
                        />
                        <Typography variant="subtitle2">Check tyre pressure</Typography>
                    </Box>
                    <Box display={'flex'} alignItems={'center'} gap={1}>
                        <Checkbox
                            color="primary"
                            sx={{
                                padding: '0px',
                                '& .MuiSvgIcon-root': {
                                    fontSize: '1rem',
                                },
                            }}
                        />
                        <Typography variant="subtitle2">Check all lights</Typography>
                    </Box>
                </Box>
            </Box>
        </Box>
    );
}

export default CustomTodoCard;
