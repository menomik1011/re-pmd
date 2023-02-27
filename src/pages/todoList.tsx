import Link from "next/link";
import React, { useState } from "react";
import { v4 as uuidv4 } from "uuid";

type Todo = {
  id: string;
  text: string;
  completed: boolean;
};

export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([
    { id: uuidv4(), text: "Learn React", completed: false },
    { id: uuidv4(), text: "Build a Todo List", completed: false },
  ]);
  const [newTodo, setNewTodo] = useState<string>("");

  const handleNewTodoChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodo(e.target.value);
  };
  const handleNewTodoKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key !== "Enter") return;
    e.preventDefault();

    const trimmedText = newTodo.trim();
    if (trimmedText) {
      setTodos([
        ...todos,
        { id: uuidv4(), text: trimmedText, completed: false },
      ]);
      setNewTodo("");
    }
  };
  const handleDeleteClick = (id: string) => {
    const todolist = [...todos];
    const updateList = todolist.filter((todo) => todo.id !== id);
    setTodos(updateList);
  };
  return (
    <div style={{ padding: "10rem" }}>
      <Link href="/" className="link">
        <h5>go home</h5>
      </Link>
      <h1>Todo List</h1>
      <div>
        <label>todo : </label>
        <input
          type="text"
          value={newTodo}
          onChange={handleNewTodoChange}
          onKeyDown={handleNewTodoKeyDown}
          placeholder="Enter a task"
        />
      </div>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            {/* <input type="checkbox"/> */}
            {todo.text}
            <button onClick={() => handleDeleteClick(todo.id)}>X</button>
          </li>
        ))}
      </ul>
      <div>{todos.length} items left</div>
    </div>
  );
}
