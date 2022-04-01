import {createStore} from "redux";
import { reducer } from "./reducer";

export const store = createStore(reducer, {count:0, todos:[{id:1, title: "Learn React", status: true}] });