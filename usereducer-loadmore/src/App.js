import React, { useState } from "react";
import "./App.css";

const allData = new Array(25).fill(0).map((_val, i) => i + 1);
const perPage = 10;

function App() {
  const [data] = useState(allData.slice(0, perPage));

  return (
    <div className="App">
      <ul>
        {data.map((row) => (
          <li key={row} style={{ background: "orange" }}>
            {row}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
