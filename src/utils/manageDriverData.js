export const TableRowData = {
    val1: 'Sr No.',
    val2: `Vehicle's Name`,
    val3: 'Email/Phone No.',
    val4: 'License No.',
    val5: 'Status',
    val6: 'Action',
  };
  
  
  function createData(id, driverName, emailPhone, licenceNo, status) {
    return { id, driverName, emailPhone, licenceNo, status };
  }
  
  export const Rows = [
    createData('1', 'Ester', '(+33)7 00 55 57 60', '34 LEJ 46', 'Inactive'),
    createData('2', 'Bessie', '+7 (809) 510-45-80', '34 LED 95', 'Active'),
  ];