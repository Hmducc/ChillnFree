import { LeftOutlined, RightOutlined } from "@ant-design/icons";
import { useState } from "react";

export default function Button() {
  const [count, setCount] = useState(0); // useState returns a pair. 'count' is the current state. 'setCount' is a function we can use to update the state.

  function increment() {
    //setCount(prevCount => prevCount+=1);
    setCount(function (prevCount) {
      return (prevCount += 1);
    });
  }

  function decrement() {
    setCount(function (prevCount) {
      if (prevCount > 0) {
        return (prevCount -= 1);
      } else {
        return (prevCount = 0);
      }
    });
  }

  return (
    <div className="App flex">
      <LeftOutlined onClick={decrement}></LeftOutlined>
      <h1 className="ml-3 mr-3">{count}</h1>
      <RightOutlined onClick={increment}></RightOutlined>
    </div>
  );
}
