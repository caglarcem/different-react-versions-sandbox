import React, { useEffect } from "react";

const ModernReactComponent = (props) => {
  const { children, input } = props;
  React.useEffect(() => {
    console.log("some effect from app2 based component");
  }, []);
  return (
    <div>
      <h3>This Component uses React Hooks with v18, works with v16</h3>
      <br />
      {children}
    </div>
  );
};

export default ModernReactComponent;
