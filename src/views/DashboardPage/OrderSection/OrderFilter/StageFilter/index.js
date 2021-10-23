import React from "react";
import { STAGES } from "../../../../../utilities/constants";
import "./stageFilter.css";

function StageFilter({ stage, setStage }) {
  const onChangeStage = (e) => {
    setStage(e.target.value);
  };

  return (
    <div className="stageFilter">
      <label htmlFor="stages" className="stageLabel">
        Stage
      </label>
      <select id="stages" className="stageSelect" defaultValue={stage} onChange={(e) => onChangeStage(e)}>
        {Object.entries(STAGES).map(([stageKey, stageValue], index) => (
          <option className="stageOption" key={stageKey + index} value={stageKey}>
            {stageValue.label}
          </option>
        ))}
      </select>
    </div>
  );
}

export default StageFilter;
