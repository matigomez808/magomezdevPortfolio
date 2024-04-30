import React from "react";

const Tooltip = ({ children, examples }) => {
  return (
    <div className="tooltip">
      {children}
      <span className="tooltiptext">{examples}</span>
    </div>
  );
};

export default Tooltip;