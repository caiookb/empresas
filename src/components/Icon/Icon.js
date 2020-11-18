import React from "react";

const Icon = ({ onClick, name, color, label }) => (
  <div
    style={{
      display: "flex",
    }}
  >
    {label}
    <i
      onClick={() => onClick()}
      className={"material-icons"}
      style={{ cursor: "pointer", color: color }}
    >
      {name}
    </i>
  </div>
);

export default Icon;

Icon.defaultProps = {
  onClick: () => null,
  label: "",
};
