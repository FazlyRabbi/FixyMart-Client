import React, { useEffect, useState } from "react";
import Tool from "./Tool";

function Tools() {
  const [tools, setTools] = useState();

  useEffect(() => {
    fetch("https://fixymart.herokuapp.com/tools")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);

  return (
    <div className="container mx-auto pb-16 ">
      <h1 className="uppercase  font-bold text-center text-[30px] mb-2">
        Our Tools
      </h1>
      <div className="flex justify-center flex-wrap">
        {tools?.map((tool, index) => (
          <Tool key={index} tool={tool} />
        ))}
      </div>
    </div>
  );
}

export default Tools;
