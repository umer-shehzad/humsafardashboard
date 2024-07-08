export const RevenueTableRowData = {
    val1: 'Sr No.',
    val2: `Customer Name`,
    val3: 'Date',
    val4: 'Status',
    val5: 'Amount',
    val6: 'Action',
  };
  
  
  function createData(id, driverName, emailPhone, licenceNo, status) {
    return { id, driverName, emailPhone, licenceNo, status };
  }
  
  export const RevenueRows = [
    createData('1', 'Henry Arthur', '01/3/2024', 'Pending', '23K PKR'),
    createData('2', 'Cooper Kristin', '12/4/2024', 'Completed', '25K PKR'),
    createData('3', 'WagonR', '15/5/2024', 'Pending', '34K PKR'),
    createData('4', 'WagonR', '01/3/2024', 'Completed', '14K PKR'),
  ];