import React from "react";
import { useSelector } from "react-redux";

export const TodoList = () => {
    const todos = useSelector((state) => state.todos)
    console.log(todos);
    return(
        <>
        {
            
            todos.map((item)=><h3>{item.title}</h3>)
        }
        </>
    )
}