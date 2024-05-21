import React, { useState } from "react";
import Data from "./Data";

const Main = () => {
  const [data, setData] = useState(Data);

  return (
    <section>
      {data.map((eachObj, index) => {
        const { FirstName, LastName, Email, Age } = eachObj;
        return (
          <div key={index}>
            <h1>{FirstName}</h1>
            <h2>{LastName}</h2>
            <h3>{Email}</h3>
            <h4>{Age}</h4>
            <button onClick={() => handleDelete(index)}>Delete</button>
          </div>
        );
      })}
    </section>
  );

  function handleDelete(index) {
    const newData = data.filter((_, i) => i !== index);
    setData(newData);
  }
};

export default Main;
