import { combineReducers } from "redux";

import todoListReducer from "../components/TodoList/todosSlice";
import filtersReducer from "../components/Filters/filtersSlice";

const rootReducer = combineReducers({
  todoList: todoListReducer,
  filters: filtersReducer,
});

export default rootReducer;
