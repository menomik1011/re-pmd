import { remove, toggle } from "@/modules/todolist";
import { useCallback } from "react";
import { useDispatch } from "react-redux";

export default function useTodoActions(id: string) {
    const dispatch = useDispatch();

    const onToggle = useCallback(() => dispatch(toggle(id)), [dispatch, id]);
    const onRemove = useCallback(() => dispatch(remove(id)), [dispatch, id]);
    return { onToggle, onRemove }
}