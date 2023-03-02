import { Todo } from "@/recoil/todos";
import React from "react";
import styles from "./TodoItem.module.css";

type TodoItemProps = {
  todo: Todo;
  onToggle: (id: string) => void;
  onRemove: (id: string) => void;
};

export default function TodoItem({ todo, onToggle, onRemove }: TodoItemProps) {
  return (
    <li
      className={styles.TodoItem + ` ${todo.completed ? styles.completed : ""}`}
    >
      <span className={styles.text} onClick={() => onToggle(todo.id)}>
        {todo.text}
      </span>
      <span className={styles.remove} onClick={() => onRemove(todo.id)}>
        (X)
      </span>
    </li>
  );
}
