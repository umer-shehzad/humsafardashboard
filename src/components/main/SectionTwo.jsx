import React from 'react'
import { Grid, Box, Typography } from '@mui/material'

const SectionTwo = () => {
    return (
        <Grid container columnSpacing={1} mt={2}>

            <Grid item xs={6}>
                {/* Title */}
                <Typography variant='h6' mb={2}>Driver's Info</Typography>
                
                {/* Content */}
                <Grid container columnSpacing={3}>
                    <Grid item xs={6}>
                        <Box
                            border={1}
                            borderColor='#D9D9D9'
                            bgcolor={'#D9D9D9'}
                            borderRadius={2}
                            width="95%"
                            height='18vh'></Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box
                            border={1}
                            borderColor='#D9D9D9'
                            borderRadius={2}
                            width="95%"
                            height='18vh'></Box>
                    </Grid>
                </Grid>
            </Grid>

            {/* Graph */}
            <Grid item xs={6}>
                <Box
                    component="img"
                    height={'30vh'}
                    alt="Graph"
                    src="/Graph.png"
                />
            </Grid>

        </Grid>
    )
}

export default SectionTwo
