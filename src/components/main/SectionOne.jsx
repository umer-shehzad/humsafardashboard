import React from 'react'
import { Grid, Box, Typography } from '@mui/material'

const SectionOne = () => {
    return (
        <>
            <Grid container spacing={3}>

                <Grid item xs={3}>
                    <Box
                        border={1}
                        borderColor='#E58600'
                        borderRadius={2}
                        bgcolor='#E58600'
                        width="95%"
                        height='18vh'
                        display={'flex'}
                        flexDirection={'column'}
                        alignItems={'center'}
                        justifyContent={'center'}
                    >
                        <Typography color='white'>Good Morning</Typography>
                        <Typography color='white'>Mr. Ahmad</Typography>
                    </Box>
                </Grid>

                <Grid item xs={3}>
                    <Box border={1} borderColor='#E58600' borderRadius={2} width="95%" height='18vh'></Box>
                </Grid>

                <Grid item xs={3}>
                    <Box border={1} borderColor='#000000' borderRadius={2} width="95%" height='18vh'></Box>
                </Grid>
                
            </Grid>
        </>
    )
}

export default SectionOne
