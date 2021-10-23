import React from "react";
import DatePicker from "./DatePicker";
import StageFilter from "./StageFilter";
import "./orderFilter.css";

function OrderFilter({ stage, setStage, selectedDate, setDate }) {
  return (
    <div className="orderFilter">
      <StageFilter stage={stage} setStage={setStage} />
      <DatePicker stage={stage} setStage={setStage} selectedDate={selectedDate} setDate={setDate} />
    </div>
  );
}

export default OrderFilter;
