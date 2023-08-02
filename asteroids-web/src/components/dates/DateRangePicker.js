import React, { useState } from 'react';
import { DateRangePicker as ReactDateRangePicker } from 'react-date-range';
import 'react-date-range/dist/styles.css'; // Import the styles
import 'react-date-range/dist/theme/default.css'; // Import the theme

const DateRangePicker = ({ onDateChange }) => {
  const [dateRange, setDateRange] = useState({
    startDate: new Date('2015-09-07'),
    endDate: new Date('2015-09-08'),
    key: 'selection',
  });

  const handleDateChange = (ranges) => {
    setDateRange(ranges.selection);
    onDateChange({
      start: ranges.selection.startDate.toISOString().slice(0, 10),
      end: ranges.selection.endDate.toISOString().slice(0, 10),
    });
  };

  return (
    <ReactDateRangePicker
      ranges={[dateRange]}
      onChange={handleDateChange}
      showSelectionPreview={true}
      moveRangeOnFirstSelection={false}
    />
  );
};

export default DateRangePicker;
