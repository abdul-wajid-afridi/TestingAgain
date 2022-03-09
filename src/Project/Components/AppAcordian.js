import React, { useState } from "react";
import { AcordianData } from "../Config/Data";

import { FaPlus, FaMinus } from "react-icons/fa";

const AppAcordian = ({ title, subtitle }) => {
  const [Show, setShow] = useState(false);

  return (
    <div>
      <p onClick={() => setShow(!Show)}>
        {title} <span>{!Show ? <FaPlus /> : <FaMinus />} </span>
      </p>
      {Show ? <p>{subtitle}</p> : ""}
      {/* {AcordianData.map((it) => {
        return (
          <div key={it.id} onClick={(e) => setShow(!Show)}>
            <p>{it.title}</p>
            {Show ? <p>{it.subtitle}</p> : ""}
          </div>
        );
      })} */}
    </div>
  );
};

export default AppAcordian;
