import React, { useState } from "react";
import DatePicker from "react-datepicker";

const Calendar = () => {
  const [date, setDate] = useState(new Date());

  const handleDateChange = (date) => {
    setDate(date);
  };

  return (
    <div> 
      <DatePicker
        selected={date}
        onChange={handleDateChange}
        locale="ES"
        weekStartDay={2}
        format="YYYY-MM-DD"

      />
    </div>
  );
};

export default Calendar;