import React from "react";
import { StepsCard } from "../../hooks/index";
import stepsData from "../../data/steps.json";

const StepsList = () => {
  return (
    <div className="steps__list">
      {stepsData.map((steps) => (
        <StepsCard step={steps.step} name={steps.name} desc={steps.desc} />
      ))}
    </div>
  );
};

export default StepsList;
