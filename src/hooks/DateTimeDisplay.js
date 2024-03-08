import React from "react";

const DateTimeDisplay = ({ value, type, isDanger }) => {
  return (
    <div className="bg-warning rounded px-3 py-2">
      <p className="m-0 fs-4 fw-semibold">{value}</p>
      <span className="m-0 fs-4 fw-semibold">{type}</span>
    </div>
  );
};

export default DateTimeDisplay;
