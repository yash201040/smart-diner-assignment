import React, { useEffect, useState } from "react";

import { DEFAULT_STAGE } from "../../utilities/constants";

import Header from "./Header";
import OrderSection from "./OrderSection";
import { getOrders } from "../../utilities/api";

import Loader from "./images/loader.gif";

import "./dashboardPage.css";

function DashboardPage() {
  // input states
  const [stage, setStage] = useState(DEFAULT_STAGE);
  const [selectedDate, setDate] = useState(new Date(2021, 7, 14));

  // request related states
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    // data is requested
    setIsLoading(true);
    setIsError(false);
    getOrders()
      .then((response) => {
        setIsLoading(false);
        setIsError(false);
        setData(response.data.orders);
      })
      .catch((error) => {
        setIsLoading(false);
        setIsError(true);
        console.error(error);
      });
  }, []);

  return (
    <div>
      <Header />
      {isLoading ? (
        <img src={Loader} alt="loader..." />
      ) : isError ? (
        <div className="ErrorDiv">There's some problem while fetching data, plesae try again</div>
      ) : (
        <OrderSection
          data={data}
          setData={setData}
          stage={stage}
          setStage={setStage}
          selectedDate={selectedDate}
          setDate={setDate}
        />
      )}
    </div>
  );
}

export default DashboardPage;
