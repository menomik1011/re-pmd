import TodoInsert from "@/components/todo-list/todo-recoil/TodoInsert";
import { useRecoilState } from "recoil";
import { inputState, Todo, todoState } from "@/recoil/todos";
import Link from "next/link";
import React from "react";
import TodoItem from "@/components/todo-list/todo-recoil/TodoItem";
import { v4 as uuidv4 } from "uuid";

export default function TodoUseRecoil() {
  const [value, setValue] = useRecoilState<string>(inputState);

  const [todos, setTodos] = useRecoilState<Todo[]>(todoState);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const todo: Todo = {
      id: uuidv4(),
      text: value,
      completed: false,
    };
    setTodos([...todos, todo]);
    setValue("");
  };

  const onToggle = (id: string) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: true } : todo
      )
    );
  };

  const onRemove = (id: string) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="layout">
      <Link href="/" className="link home">
        <h5>go home</h5>
      </Link>
      <h1>Todo List - recoil</h1>
      <TodoInsert value={value} onChange={onChange} onSubmit={onSubmit} />
      <ul>
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={onToggle}
            onRemove={onRemove}
          />
        ))}
      </ul>
    </div>
  );
}
