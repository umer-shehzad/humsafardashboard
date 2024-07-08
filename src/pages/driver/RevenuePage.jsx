import React from 'react'
import { Box } from '@mui/material'
import RevenueCardsBox from '../../components/driver-side/revenue/RevenueCardsBox'
import Graph from '../../components/driver-side/dashboard/Graph'
import CustomerPayments from '../../components/driver-side/revenue/CustomerPayments'

const RevenuePage = () => {
  return (
    <Box>
      <RevenueCardsBox />

      {/* Graphs */}
      <Box display={'flex'} justifyContent={'space-between'} mt={4} mb={3}>
        <Graph />
        <Graph />
      </Box>

      {/* Customer Payment Table */}
      <CustomerPayments />
    </Box>
  )
}

export default RevenuePage