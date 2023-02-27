import useCounter from "@/hooks/useCounter";
import React from "react";

export default function CounterUseHookComp() {
  const { count, onIncrease, onDecrease, onIncreaseBy } = useCounter();
  return (
    <div style={{ padding: "10rem" }}>
      <h1>{count}</h1>
      <button onClick={onIncrease}>+1</button>
      <button onClick={onDecrease}>-1</button>
      <button onClick={() => onIncreaseBy(5)}>+5</button>
    </div>
  );
}
