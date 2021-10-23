import React, { useEffect } from "react";
import OrderFilter from "./OrderFilter";
import OrderTable from "./OrderTable";
import { filterTable } from "./filterTable";

function OrderSection({ data, setData, stage, setStage, selectedDate, setDate }) {
  const filteredData = filterTable(data, stage, selectedDate);
  return (
    <div>
      <OrderFilter stage={stage} setStage={setStage} selectedDate={selectedDate} setDate={setDate} />
      <OrderTable data={filteredData} />
    </div>
  );
}

export default OrderSection;
