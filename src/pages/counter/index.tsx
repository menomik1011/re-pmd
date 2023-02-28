import CounterComp from "@/components/counter/CounterComp";
import { RootState } from "@/modules";
import { decrease, increase, increaseBy } from "@/modules/counter";
import Link from "next/link";
import React from "react";
import { useSelector, useDispatch } from "react-redux";

export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.count);
  const dispatch = useDispatch();

  const onIncrease = () => {
    dispatch(increase());
  };

  const onDecrease = () => {
    dispatch(decrease());
  };

  const onIncreaseBy = (diff: number) => {
    dispatch(increaseBy(diff));
  };

  return (
    <div className="layout">
      <Link href="/" className="link home">
        <h5>go home</h5>
      </Link>
      <CounterComp
        count={count}
        onIncrease={onIncrease}
        onDecrease={onDecrease}
        onIncreaseBy={onIncreaseBy}
      />
    </div>
  );
}
