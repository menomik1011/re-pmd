import { add } from "@/modules/todolist";
import React, { useCallback } from "react";
import { useDispatch } from "react-redux";

export default function useAddTodo() {
  const dispatch = useDispatch();
  return useCallback((text: string) => dispatch(add(text)), [dispatch]);
}
