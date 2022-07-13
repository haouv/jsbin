/**
 * 可以理解成 afterRender
 * 副作用是函数式编程里的概念
 * UseLayoutEffect 在DOM生成以后，浏览器渲染之前执行
 */

 import React, {useRef, useState, useEffect, useLayoutEffect } from "react";
 import ReactDOM from "react-dom";

 function App() {
   const [n, setN] = useState(0);
   let time = useRef();
   const onClick = () => {
     time.current = performance.now();
     setN(n+1);
   }
   useEffect(() => {
     console.log('effect', performance.now() - time.current);
   })
 
   useLayoutEffect(() => {
     console.log('layouteffect', performance.now() - time.current);
   })
   return <>
     <div>{n}</div>
     <button onClick={onClick}>+1</button>
   </>
 }
 
 const rootElement = document.getElementById("root");
 ReactDOM.render(<App />, rootElement);
 