import React from "react";

const DEFAULT_MESSAGE = "משהו השתבש נסה שנית.";

export function Error({ message = DEFAULT_MESSAGE }) {
  return (
    <div className="error">
      אוו! {message}
    </div>
  );
}
