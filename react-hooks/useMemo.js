import React, {useRef, useState, useEffect, useLayoutEffect } from "react";
import ReactDOM from "react-dom";
/**
 * useMemo：被useMemo包装的组件，仅在被传入的props发生改变时，重新渲染
 * useCallback: 方便包装缓存一个函数
 */


function Child(props) {
  console.log('Child 重新渲染了')
  return <div>{props.data}</div>
}

const Child2 = React.memo(Child)

function App() {
  const [n, setN] = useState(0);
  const [m, setM] = useState(0);
  // 可能导致memo失效，需要用React.useCallback 讲函数包装缓存
  const onClick = () => {}
  return <div>
    <button onClick={() => {
      setN(n+1)
      // setM(m+1)
    }}>update n {n}</button>
    <div>{n}</div>

    <Child2 data={m} onClick={onClick}/>
  </div>
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
