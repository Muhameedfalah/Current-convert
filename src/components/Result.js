import React from "react";

export const Result = ({ value = 0, editable = false }) => {
  return (
    <label className="result">
      <div className="label">Result:</div>
      <input
        type="text"
        value={value}
        disabled={!editable}
        style={{ borderRadius: "10px" }}
      />
    </label>
  );
};
