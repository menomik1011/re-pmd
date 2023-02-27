const ADD = 'todos/Add' as const;

export const add = () => ({type: ADD});

//리듀서를 작성 할 때 action 파라미터의 타입을 설정하기 위해서 우리가 만든 모든 액션들의 TypeScript 타입을 준비해주어야한다.
type TodosAction = | ReturnType<typeof add>;