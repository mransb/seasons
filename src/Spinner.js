import React from "react";

const Spinner = ({ message }) => {
  return (
    <div className="ui dimmer active">
      <div className="ui text loader">{message}</div>
    </div>
  );
};

export default Spinner;
