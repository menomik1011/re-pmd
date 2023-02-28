import CounterComponent from "@/components/counter/02/CounterComponent";
import Link from "next/link";
import React from "react";

export default function CounterUseHook() {
  return (
    <div className="layout">
      <Link href="/" className="link home">
        <h5>go home</h5>
      </Link>
      <CounterComponent />
    </div>
  );
}
