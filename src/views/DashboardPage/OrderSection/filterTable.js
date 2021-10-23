import { STAGES } from "../../../utilities/constants";

export const filterTable = (data, stageKey, selectedDate) => {
  return data.filter((object) => {
    const orderDate = new Date(object.createdAt);
    const isCurrentStage = STAGES[stageKey].id.includes(Number(object.stage_id));
    const isDateSelected = !(selectedDate === null || selectedDate === undefined);
    const isCurrentDate = selectedDate?.toDateString() === orderDate?.toDateString();
    return isCurrentStage && (isDateSelected ? isCurrentDate : true);
  });
};        
