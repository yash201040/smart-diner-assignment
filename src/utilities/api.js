import axios from "axios";
import { jwtToken } from "./constants";

const getJwtToken = () => {
  let availableToken = localStorage.getItem("jwtToken");
  if (!availableToken) {
    localStorage.setItem("jwtToken", jwtToken);
    availableToken = jwtToken;
  }
  return availableToken;
};

export const axiosInstance = axios.create({
  headers: {
    "x-access-token": getJwtToken(),
  },
});

export const getOrders = () =>
axiosInstance.get("https://testingapi.smartdiner.co/after_login/restaurant/2/get_orders");
