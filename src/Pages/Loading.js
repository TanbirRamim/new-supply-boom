import React from "react";
import { Audio } from "react-loader-spinner";

const Loading = () => {
  const style = {
    position: "fixed",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
  };
  return (
    <div style={style} className="spin-control">
      <Audio height="100" width="100" color="grey" ariaLabel="loading" />
    </div>
  );
};

export default Loading;
