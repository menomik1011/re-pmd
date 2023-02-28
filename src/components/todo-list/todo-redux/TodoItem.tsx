import { Todo } from "@/modules/todolist";
import styles from "./TodoItem.module.css";
import React from "react";
import useTodoActions from "@/hooks/useTodoActions";

type TodoItemProps = {
  todo: Todo;
};

export default function TodoItem({ todo }: TodoItemProps) {
  const { onToggle, onRemove } = useTodoActions(todo.id);

  return (
    <li
      className={styles.TodoItem + ` ${todo.completed ? styles.completed : ""}`}
    >
      <span className={styles.text} onClick={onToggle}>
        {todo.text}
      </span>
      <span className={styles.remove} onClick={onRemove}>
        (X)
      </span>
    </li>
  );
}
