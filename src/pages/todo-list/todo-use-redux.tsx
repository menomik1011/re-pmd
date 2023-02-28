import TodoInsert from "@/components/todo-list/todo-redux/TodoInsert";
import TodoList from "@/components/todo-list/todo-redux/TodoList";
import Link from "next/link";
import React from "react";

export default function TodoUseRedux() {
  return (
    <div className="layout">
      <Link href="/" className="link">
        <h5>go home</h5>
      </Link>
      <TodoInsert />
      <TodoList />
    </div>
  );
}
