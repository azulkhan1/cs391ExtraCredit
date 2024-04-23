"use client";
import { useState } from "react";

const Page = () => {
  const [data, setData] = useState(0);

  function handleClick() {
    setData(data + 1);
  }
  return (
    <div
      style={{
        width: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        backgroundColor: "red",
      }}
    >
      <div
        style={{
          width: "300px",
          backgroundColor: "white",
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          color: "black",
          alignItems: "center",
          height: "300px",
          justifyContent: "center",
        }}
      >
        <p style={{ fontSize: "70px" }}>{data}</p>
        <button onClick={handleClick}>Click Me</button>
      </div>
    </div>
  );
};

export default Page;
