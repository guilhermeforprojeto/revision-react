import React, { useState } from "react";
import "./App.css";

function App() {
  const [count, setCount] = useState<number | undefined>(undefined);
  const [name, setName] = useState<string | undefined>(undefined);
  return <div className="App"><h2>BORA CODA! LEIA O README.MD</h2>
  <p>{name || 'Sem nome defido'}</p>
  <input onChange={(event) => setName(event.target.value)}></input>
  <h1>{count}</h1>
  <button onClick={() => setCount((count || 0) + 1)} >Incrementar</button>
  <button onClick={() => setCount((count || 0)- 1)} >Decrementar</button>
  </div>;
}

export default App;
