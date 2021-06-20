import { createReducer } from "@reduxjs/toolkit";
import { LocalStorage } from "@elijahcode/taskcalendarapi";
import {
  addTaskActionCreator,
  updateTaskActionCreator,
  deleteTaskActionCreator,
  loadTaskListFromStorageActionCreator,
} from "../actions/actions";

export function storeReducerCreator(initState) {
  return createReducer(initState, (builder) => {
    builder
      .addCase(addTaskActionCreator, (state, action: Action) => {
        console.log(action.payload);
        state.push(action.payload);
      })
      .addCase(updateTaskActionCreator, (state, action: Action) => {
        const newState = [...state];
        newState.forEach((el) => {
          if (el.id === action.payload.task.id) {
            Object.keys(action.payload.task).forEach((key) => {
              // eslint-disable-next-line no-param-reassign
              el[key] = action.task[key];
            });
          }
        });
        state.splice(0);
        state.push(...newState);
      })
      .addCase(deleteTaskActionCreator, (state, action: Action) => {
        const newState = [...state].filter(
          (el) => el.id !== action.payload.task.id
        );
        state.splice(0);
        state.push(...newState);
      })
      .addCase(
        loadTaskListFromStorageActionCreator,
        (state, action: Action) => {
          action.payload.forEach((task: Task) => {
            state.push(task);
          });
        }
      );
  });
}
