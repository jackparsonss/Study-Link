import React from "react";
import "./TimeToStudy.css";

function TimeToStudy({ timeLeft }) {
  return (
    <div className="timeToStudy">
      <h2 className="timeToStudy__title">
        {timeLeft} Hours Left To Study This Week
      </h2>
    </div>
  );
}

export default TimeToStudy;
