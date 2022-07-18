import React, { useState, useEffect } from "react";

export default function Button({ page }) {
  const [data, setData] = useState("");

  return (
    <div>
      {console.log("Return")}
      <h1>{page}</h1>
      <h3>This is what you type in the field: {data}</h3>
      <input type={"text"} onChange={(e) => setData(e.target.value)} />
      {/* <button style={{ background: "pink" }}>{data}</button>  */}
    </div>
  );
}
