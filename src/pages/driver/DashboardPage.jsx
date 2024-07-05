import React from 'react'

import { Box } from '@mui/material'

import CustomTable from '../../components/common/CustomTable'
import Graph from '../../components/driver-side/dashboard/Graph'
import RidesInfo from '../../components/driver-side/dashboard/RidesInfo'

const DashboardPage = () => {
  return (
    <>
      <RidesInfo />
      <Box display={'flex'} gap={6} mt={4} mb={3}>
        <Graph />
        <Graph />
      </Box>
      <CustomTable />
    </>
  )
}

export default DashboardPage
