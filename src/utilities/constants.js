export const jwtToken =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NywiaWF0IjoxNjM0OTUzNjY4LCJleHAiOjE2MzUwNDAwNjh9.JHdTJL_HhrWk-eHMdIbA80Gkupc3fxlNvTP66thakDg";

export const DEFAULT_STAGE = "ALL";

export const STAGES = {
  ALL: {
    label: "All",
    id: [1, 2, 3, 4, 5, 6, 7, 8, 9], // to-do Update all ids
  },
  NEW_ORDERS: {
    label: "New Orders",
    id: [1],
  },
  PREPARING: {
    label: "Preparing",
    id: [2, 3],
  },
  OUT_FOR_DELIVERY: {
    label: "Out For Delivery",
    id: [4, 5, 6],
  },
  COMPLETED: {
    label: "Completed",
    id: [7, 8, 9],
  },
};
