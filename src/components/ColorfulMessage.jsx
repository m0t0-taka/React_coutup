import React from "react";

export const ColorfulMessage = (props) => {
  const { color, children } = props;
  const cotentStyle = {
    color: color,
    fontSize: "18px"
  };
  return (
    <>
      <p style={cotentStyle}>{children}</p>
    </>
  );
};
