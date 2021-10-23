import React from "react";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import "./datePicker.css";

function DatePicker({ selectedDate, setDate }) {
  const onChangeDate = (date) => setDate(date);
  return (
    <div className="datePicker">
      <label className="dateLabel">Date</label>
      <ReactDatePicker
        className="dateDisplay"
        placeholderText="No date selected"
        selected={selectedDate}
        onChange={(date) => onChangeDate(date)}
        dateFormat="dd-MMMM yyyy"
        maxDate={new Date()}
        isClearable={true}
        showYearDropdown={true}
        scrollableYearDropdown={true}
      />
    </div>
  );
}

export default DatePicker;
