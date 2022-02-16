// const initState = [
//   { id: 1, name: "Learn React", completed: false, priority: "High" },
//   { id: 2, name: "Learn Redux", completed: true, priority: "Low" },
//   { id: 3, name: "Learn Database", completed: false, priority: "Medium" },
// ];

// const todoListReducer = (state = initState, action) => {
//   switch (action.type) {
//     case "todoList/addTodo":
//       return [...state, action.payload];

//     case "todoList/toggleTodoStatus":
//       return state.map((todo) =>
//         todo.id === action.payload
//           ? { ...todo, completed: !todo.completed }
//           : todo
//       );

//     default:
//       return state;
//   }
// };

// export default todoListReducer;

import { createSlice } from "@reduxjs/toolkit";

export default createSlice({
  name: "todoList",
  initialState: [
    { id: 1, name: "Learn React", completed: false, priority: "High" },
    { id: 2, name: "Learn Redux", completed: true, priority: "Low" },
    { id: 3, name: "Learn Database", completed: false, priority: "Medium" },
  ],
  reducers: {
    addTodo: (state, action) => {
      state.push(action.payload);
    },
    toggleTodoStatus: (state, action) => {
      const currentTodo = state.find((todo) => todo.id === action.payload);
      currentTodo.completed = !currentTodo.completed;
    },
  },
});
