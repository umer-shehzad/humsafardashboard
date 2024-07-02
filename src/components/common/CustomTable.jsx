import React from 'react'

import { Box, Typography } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { colors } from '../../utils/colors';

function createData(id, driverName, loginDateTime, lastUpdateTime) {
  return { id, driverName, loginDateTime, lastUpdateTime };
}

const rows = [
  createData('01', 'Brad Pitt', '15 Dec 4:30', 'Brad Pitt'),
  createData('02', 'Brad Pitt', '15 Dec 4:30', 'Brad Pitt'),
  createData('03', 'Brad Pitt', '15 Dec 4:30', 'Brad Pitt'),
  createData('04', 'Brad Pitt', '15 Dec 4:30', 'Brad Pitt'),
];

const CustomTable = () => {
  return (
    <Box display={'flex'} flexDirection={'column'} rowGap={4}>
      {/* Title */}
      <Typography variant='h5'>Recently Active Drivers</Typography>

      {/* Table */}
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: `${colors.btnBgColor}` }}>
              <TableCell
                sx={{
                  color: 'white',
                  paddingLeft: 5,
                  width: '25%',
                  fontWeight: 'bold',
                  borderBottom: 'none',
                  borderTopLeftRadius: '6px',
                  borderBottomLeftRadius: '6px',
                }}
              >
                Sr No.
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: 'white',
                  width: '25%',
                  paddingRight: 15,
                  fontWeight: 'bold',
                  borderBottom: 'none',
                }}
              >
                Driver's Name
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: 'white',
                  fontWeight: 'bold',
                  paddingLeft: 5,
                  width: '25%',
                  borderBottom: 'none',
                }}
              >
                Login Date/Time
              </TableCell>
              <TableCell
                align="right"
                sx={{
                  color: 'white',
                  fontWeight: 'bold',
                  paddingRight: 5,
                  width: '25%',
                  borderBottom: 'none',
                  borderTopRightRadius: '6px',
                  borderBottomRightRadius: '6px',
                }}
              >
                Last Update Time
              </TableCell>
            </TableRow>
          </TableHead>


          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
              >
                <TableCell sx={{ borderBottom: 'none', paddingLeft: 6 }}>{row.id}</TableCell>
                <TableCell align='center' sx={{ borderBottom: 'none', paddingRight: 15 }}>{row.driverName}</TableCell>
                <TableCell align="center" sx={{ borderBottom: 'none', paddingLeft: 6 }}>{row.loginDateTime}</TableCell>
                <TableCell align="right" sx={{ borderBottom: 'none', paddingRight: 6 }}>{row.lastUpdateTime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default CustomTable
