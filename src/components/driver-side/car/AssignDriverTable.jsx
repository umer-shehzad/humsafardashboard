import React from 'react'

import { Box, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { colors } from '../../../utils/colors';
import { Link } from 'react-router-dom';
import CustomButton from '../../common/CustomButton';

function createData(id, driverName, emailPhone, licenseNo) {
  return { id, driverName, emailPhone, licenseNo };
}

const rows = [
  createData('01', 'Ahmad Ali', '(+33)7 00 55 57 60', '34 LEJ 46',),
  createData('02', 'Ahmad Ali', '(+92)8 10 50 43 12', '34 LEJ 46',),
];

const AssignDriverTable = () => {
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
                  fontWeight: 'bold',
                  borderBottom: 'none',
                  borderTopLeftRadius: '6px',
                  borderBottomLeftRadius: '6px',
                }}
              >
                Sr No.
              </TableCell>
              <TableCell

                sx={{
                  color: 'white',
                  fontWeight: 'bold',
                  borderBottom: 'none',
                }}
              >
                Driver's Name
              </TableCell>
              <TableCell

                sx={{
                  color: 'white',
                  fontWeight: 'bold',
                  borderBottom: 'none',
                }}
              >
                Eamil/Phone No.
              </TableCell>
              <TableCell

                sx={{
                  color: 'white',
                  fontWeight: 'bold',
                  borderBottom: 'none',
                }}
              >
                License No.
              </TableCell>
              <TableCell
                align='center'
                sx={{
                  color: 'white',
                  fontWeight: 'bold',
                  borderBottom: 'none',
                  borderTopRightRadius: '6px',
                  borderBottomRightRadius: '6px',
                }}
              >
                Actions
              </TableCell>
            </TableRow>
          </TableHead>


          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.id}
              >
                <TableCell sx={{ borderBottom: 'none' }}>{row.id}</TableCell>
                <TableCell sx={{ borderBottom: 'none' }}>{row.driverName}</TableCell>
                <TableCell sx={{ borderBottom: 'none' }}>{row.emailPhone}</TableCell>
                <TableCell sx={{ borderBottom: 'none' }}>{row.licenseNo}</TableCell>
                <TableCell sx={{ borderBottom: 'none', paddingRight: 0 }} align='left'>
                  <Link to={'/driver/cars'}>
                    <CustomButton btnName={'Assign'} width={'100%'} fontWeight={500} borderRadius={'5px'} />
                  </Link>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  )
}

export default AssignDriverTable
