import React, { useState } from "react";
import AppAcordian from "../Components/AppAcordian";
import { AcordianData } from "../Config/Data";

const Acordian = () => {
  return (
    <div>
      {AcordianData.map((it) => {
        return <AppAcordian title={it.title} subtitle={it.subtitle} />;
      })}
    </div>
  );
};

export default Acordian;
