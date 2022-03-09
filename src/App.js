import React, { useEffect, useState } from "react";
import Index from "./Project/Index";

const App = () => {
  const [Count, setCount] = useState([]);
  const url = "https://api.github.com/users";
  const showData = async () => {
    const req = await fetch(url);
    // console.log(req);
    const res = await req.json();
    setCount(res);
    console.log(Count, "show Dtaa");
  };
  useEffect(() => {
    showData();
  }, []);
  return (
    <div>
      {/* <Index /> */}
      {Count.map((it) => {
        return <p>{it.login}</p>;
      })}
      <p>UseEffect</p>
    </div>
  );
};

export default App;
