function convertDateFormat(dateString: string) {
  try {
    // Date string format: 'dd-mm-yy'
    // Split the string by '-'
    const parts = dateString.split('-');

    // Extract day, month, and year
    const day = parts[0];
    const month = parts[1];
    const year = '20' + parts[2];

    // Format the date
    const formattedDate = `${day.padStart(2, '0')}/${month.padStart(
      2,
      '0'
    )}/${year}`;

    return formattedDate;
  } catch (error) {
    return dateString;
  }
}

export default convertDateFormat;
