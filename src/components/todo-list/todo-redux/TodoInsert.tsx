import useAddTodo from "@/hooks/useAddTodo";
import React, { ChangeEvent, FormEvent, useState } from "react";

export default function TodoInsert() {
  const [value, setValue] = useState("");
  const addTodo = useAddTodo();
  const onChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value);
  };
  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    addTodo(value);
    setValue("");
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        type={"text"}
        value={value}
        onChange={onChange}
        placeholder="할 일을 입력하세요."
      />
      <button type="submit">등록</button>
    </form>
  );
}
