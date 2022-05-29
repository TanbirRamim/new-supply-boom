import React, { useEffect, useState } from "react";
import Tool from "./Tool";

const Tools = () => {
  const [tools, setTools] = useState([]);
  useEffect(() => {
    fetch("https://pacific-gorge-12132.herokuapp.com/tool")
      .then((res) => res.json())
      .then((data) => setTools(data));
  }, []);
  return (
    <div>
      <h1 className="text-center text-3xl underline underline-offset-2 text-neutral">
        TOOLS
      </h1>
      <div>
        <div className="grid lg:grid-cols-3 gap-3">
          {tools.map((tool) => (
            <Tool key={tool.id} tool={tool}></Tool>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
