/**
 * useContext 是自上而下逐个组件执行的方式，不是响应式的去执行
 */

import React, { createContext, useContext, useReducer, useState } from "react";
import ReactDOM from "react-dom";

const C = createContext();

function App() {
  const [n, setN] = useState(0);
  return <C.Provider value={{ n, setN }} >
    <Baba />
    <Child />

  </C.Provider>
}

function Baba() {
  return <div></div>
}

function Child() {
  const {n, setN} = useContext(C);
  
  return <><div>{n}</div><button onClick={() => setN(n+1)}>+1</button></>
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
