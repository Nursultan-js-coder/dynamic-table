import {combineReducers} from "redux";
import visibilityFilter from "./visibilityFilter";
import todos from "./todos";
import visibilitySort from "./visibilitySort";

export default combineReducers({todos, visibilityFilter, visibilitySort});
