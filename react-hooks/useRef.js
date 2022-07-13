import React, {useRef, useState, useEffect, useLayoutEffect } from "react";
import ReactDOM from "react-dom";
/**
 * useRef 需要一个值，在组件不断render的过程中，保持不变，使用useRef
 * 每次改变ref.current 不会导致组件重新渲染
 * current： 因为需要保存一个对象的引用，所以需要把要固定的值，放到一个对象的属性上，所以需要从current属性上取值
 */

function App() {
  const count = useRef(0);
  const [, set_] = useState();
  const onClick = () => {
    count.current ++;
    set_(Math.random())
    console.log(count.current)
  }
  return <div>
    {count.current}
    <button onClick={onClick}> + 1</button>
  </div>
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
