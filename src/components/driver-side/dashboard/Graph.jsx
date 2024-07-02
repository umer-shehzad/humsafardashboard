import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';
import { Box, Paper } from '@mui/material';
import { colors } from '../../../utils/colors';

export default function BasicArea() {
  return (
    <Box
      borderRadius={3}
      bgcolor={colors.graphBoxBgColor}
    >
      <Paper elevation={0}
        sx={{
          borderRadius: '5px',
          border: `2px solid ${colors.searchBarColor}`,
          margin: '7px'
        }}
      >
        <LineChart
          xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
          series={[
            {
              data: [2, 5.5, 2, 8.5, 1.5, 5],
              area: true,
            },
          ]}
          grid= {{ horizontal: true }}
          width={480}
          height={300}
        />
      </Paper>
    </Box>
  );
}