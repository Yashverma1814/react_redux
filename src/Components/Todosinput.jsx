import React from "react";
import {v4 as uuid} from "uuid";
import { useDispatch } from "react-redux";
import { addTodos } from "../Redux/action";

export const Todoinput = () =>{
    const [name,setName] = React.useState("");

    const dispatch = useDispatch();

    const handelAdd = () =>{
        const payload={
            id: uuid,
            title:name, 
            status: false,
        }
        dispatch(addTodos(payload));
    }

    return(<>
        <input 
        type="text"
        placeholder="Add Todos"
        value={name}
        onChange = {(e)=>setName(e.target.value)}
        />
        <button onClick={handelAdd}>ADD</button>
    </>)
}