import React from "react";

function Class({ timeLeft, classTitle }) {
  return (
    <div>
      {timeLeft} hr left in {classTitle}
    </div>
  );
}

export default Class;
