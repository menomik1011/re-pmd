import { atom } from "recoil";
import { v4 as uuidv4 } from "uuid";

export type Todo = {
	id: string;
	text: string;
	completed: boolean;
};

export const inputState = atom({
	key: 'inputState',
	default: '',
})

export const todoState = atom<Todo[]>({
	key: 'todos',
	default: [
		{ id: uuidv4(), text: "Learn React", completed: false },
		{ id: uuidv4(), text: "Build a Todo List", completed: false },
		{ id: uuidv4(), text: "Start Learn Typescript", completed: true },
	]
})
