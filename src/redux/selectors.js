import { createSelector } from "@reduxjs/toolkit";

export const searchTextSelector = (state) => state.filters.search;
export const filterStatusSelector = (state) => state.filters.status;
export const filterPrioritiesSelector = (state) => state.filters.priorities;
export const todoListSelector = (state) => state.todoList;

export const todosRemainingSelector = createSelector(
  todoListSelector,
  filterStatusSelector,
  searchTextSelector,
  filterPrioritiesSelector,
  (todoList, status, searchText, priorities) => {
    return todoList.filter((todo) => {
      // if (status === "All") {
      //   return (
      //     todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
      //     (priorities.length === 0 || priorities.includes(todo.priority))
      //   );
      // }
      return (
        todo.name.toLowerCase().includes(searchText.toLowerCase()) &&
        (priorities.length === 0 || priorities.includes(todo.priority)) &&
        (status === "All" ||
          (status === "Completed" ? todo.completed : !todo.completed))
      );
    });
  }
);
