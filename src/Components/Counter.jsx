import React from "react";
import { useSelector,useDispatch } from "react-redux";
import { incCount } from "../Redux/action";

export const Counter = () =>{
    const count = useSelector(state=>state.count);
    const dispatch = useDispatch();

    return(
        <div>
            <h3>Count {count}</h3>
            <button onClick={()=>dispatch(incCount(2))}>INC</button>
        </div>
    )
}