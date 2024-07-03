import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";
import { colors } from '../../utils/colors';

const CustomTableTwo = ({ tableRowData, rows }) => {
  return (
    <Box display={'flex'} flexDirection={'column'} rowGap={4}>
      {/* Table */}
      <TableContainer>
        <Table aria-label="simple table">
          <TableHead>
            <TableRow sx={{ backgroundColor: `${colors.btnBgColor}` }}>
              <TableCell
                align="center"
                sx={{
                  color: 'white',
                  fontSize: '18px',
                  borderBottom: 'none',
                  borderTopLeftRadius: '6px',
                  borderBottomLeftRadius: '6px',
                }}
              >
                {tableRowData.val1}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: 'white',
                  fontSize: '18px',
                  borderBottom: 'none',
                }}
              >
                {tableRowData.val2}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: 'white',
                  fontSize: '18px',
                  borderBottom: 'none',
                }}
              >
                {tableRowData.val3}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: 'white',
                  fontSize: '18px',
                  borderBottom: 'none',
                }}
              >
                {tableRowData.val4}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: 'white',
                  fontSize: '18px',
                  borderBottom: 'none',
                }}
              >
                {tableRowData.val5}
              </TableCell>
              <TableCell
                align="center"
                sx={{
                  color: 'white',
                  fontSize: '18px',
                  borderBottom: 'none',
                  borderTopRightRadius: '6px',
                  borderBottomRightRadius: '6px',
                }}
              >
                {tableRowData.val6}
              </TableCell>
            </TableRow>
          </TableHead>

          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.id}>
                <TableCell align='center' sx={{ borderBottom: 'none' }}>{row.id}</TableCell>
                <TableCell align='center' sx={{ borderBottom: 'none' }}>{row.driverName}</TableCell>
                <TableCell align="center" sx={{ borderBottom: 'none' }}>{row.emailPhone}</TableCell>
                <TableCell align="center" sx={{ borderBottom: 'none' }}>{row.licenceNo}</TableCell>
                <TableCell align="center" sx={{ borderBottom: 'none' }}>{row.status}</TableCell>
                <TableCell align="center" sx={{ borderBottom: 'none' }}>
                  <Box display={'flex'} justifyContent={'center'} gap={1}>
                    <IconButton aria-label="edit" size="small">
                      <CiEdit color={colors.textFifthColor} />
                    </IconButton>
                    <IconButton aria-label="delete" size="small">
                      <MdDeleteOutline color={colors.textFifthColor} />
                    </IconButton>
                  </Box>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default CustomTableTwo;
