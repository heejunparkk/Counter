import React, { useState } from "react";
import OddEvenResult from "./OddEvenResult";

const Counter = () => {
  const [count, setcount] = useState(0);

  const onIncrease = () => {
    setcount(count + 1);
  };
  const onDecrease = () => {
    setcount(count - 1);
  };

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={onIncrease}>+</button>
      <button onClick={onDecrease}>-</button>
      <OddEvenResult count={count} />
    </div>
  );
};

export default Counter;
