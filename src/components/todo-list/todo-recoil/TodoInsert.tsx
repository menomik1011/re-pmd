import React from "react";

type TodoInsertProps = {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export default function TodoInsert({
  value,
  onChange,
  onSubmit,
}: TodoInsertProps) {
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
