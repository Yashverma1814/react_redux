export const INC_COUNT = "INC_COUNT";
export const ADD_TODOS = "ADD_TODOS";

export const incCount = (payload) => ({
    type: INC_COUNT,
    payload
});

export const addTodos = (payload) => ({
    type: ADD_TODOS,
    payload
});

