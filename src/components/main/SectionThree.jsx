import React from 'react'
import { Box, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(id, driverName, loginDateTime, lastUpdateTime) {
    return { id, driverName, loginDateTime, lastUpdateTime };
  }
  
  const rows = [
    createData('01', 'Brad Pitt', '15 Dec 4:30', 'Brad Pitt'),
    createData('02',  'Brad Pitt', '15 Dec 4:30', 'Brad Pitt'),
    createData('03',  'Brad Pitt', '15 Dec 4:30', 'Brad Pitt'),
    createData('04',  'Brad Pitt', '15 Dec 4:30', 'Brad Pitt'),
  ];

const SectionThree = () => {
    return (
        <Box mt={0}>
            {/* Title */}
            <Typography variant='h6' mb={1}>Recently Active Drivers</Typography>

            {/* Table */}
            <TableContainer>
                <Table sx={{ minWidth: 650, }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align='center' sx={{ fontWeight: 'bold', borderBottom: 'none' }}>Sr No.</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold', borderBottom: 'none' }}>Driver's Name</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold', borderBottom: 'none' }}>Login Date/Time</TableCell>
                            <TableCell align="center" sx={{ fontWeight: 'bold', borderBottom: 'none' }}>Last Update Time</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.map((row) => (
                            <TableRow
                                key={row.id}
                            >
                                <TableCell align='center' sx={{ borderBottom: 'none' }}>{row.id}</TableCell>
                                <TableCell align="center" sx={{ borderBottom: 'none' }}>{row.driverName}</TableCell>
                                <TableCell align="center" sx={{ borderBottom: 'none' }}>{row.loginDateTime}</TableCell>
                                <TableCell align="center" sx={{ borderBottom: 'none' }}>{row.lastUpdateTime}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default SectionThree
