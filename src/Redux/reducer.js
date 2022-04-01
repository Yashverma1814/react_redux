import { INC_COUNT } from "./action";
import { ADD_TODOS } from "./action";

export const reducer = (store,action) => {
    switch(action.type){
        case INC_COUNT:
            return{
                ...store,
                count: store.count+action.payload
            };
        case ADD_TODOS:
            return{
                ...store,
                todos: [...store.todos,action.payload]
            }
            
        default:
            return store;
    }
}