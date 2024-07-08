import { Box, Typography } from '@mui/material'
import React from 'react'
import CustomTableTwo from '../../common/CustomTableTwo'
import { RevenueRows, RevenueTableRowData } from '../../../utils/reveueData'

const CustomerPayments = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} gap={3}>
        <Typography variant={'h4'} fontWeight={600}>Payments</Typography>
        <CustomTableTwo tableRowData={RevenueTableRowData} rows={RevenueRows}/>
    </Box>
  )
}

export default CustomerPayments