import { combineReducers } from "../../components/redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";

export default combineReducers({ todos, visibilityFilter });
