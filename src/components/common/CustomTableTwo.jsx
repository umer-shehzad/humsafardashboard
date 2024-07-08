import React from 'react';
import { CiEdit } from "react-icons/ci";
import { MdDeleteOutline } from "react-icons/md";

import { Box, ListItemIcon, } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

import { colors } from '../../utils/colors';

import CustomIcon from './CustomIcon';

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
                  paddingBottom: 1,
                  paddingTop: 1,
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
                  paddingBottom: 1,
                  paddingTop: 1,
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
                  paddingBottom: 1,
                  paddingTop: 1,
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
                  paddingBottom: 1,
                  paddingTop: 1,
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
                  paddingBottom: 1,
                  paddingTop: 1,
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
                  paddingBottom: 1,
                  paddingTop: 1,
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
                <TableCell align="center" sx={{ borderBottom: 'none', color: row.licenceNo === 'Completed' ? colors.textTertiaryColor : colors.dangerColor }}>{row.licenceNo}</TableCell>
                <TableCell align="center" sx={{ borderBottom: 'none', color: row.status === 'Active' ? colors.textTertiaryColor : 'inherit' }}>
                  {row.status}
                </TableCell>
                <TableCell align="center" sx={{ borderBottom: 'none' }}>
                  <Box display={'flex'} justifyContent={'center'} gap={1}>
                    <CustomIcon iconName="edit" color={colors.editIconBgColor} size="1.2rem" />
                    <CustomIcon iconName="delete" color={colors.deleteIconBgColor} size="1.2rem" />
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
