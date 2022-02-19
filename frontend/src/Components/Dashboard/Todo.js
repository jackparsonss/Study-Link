import React from "react";

function Todo({ title, classTitle, dueDate }) {
  return (
    <div>
      <h1>{title}</h1>
      <h3>Due: {dueDate}</h3>
      <p>class: {classTitle}</p>
    </div>
  );
}

export default Todo;
