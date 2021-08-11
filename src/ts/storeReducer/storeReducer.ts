import { createReducer, Reducer } from "@reduxjs/toolkit";
import {
  addTaskActionCreator,
  updateTaskActionCreator,
  deleteTaskActionCreator,
  loadTaskListFromStorageActionCreator,
} from "../actions/actions";

export function storeReducerCreator(initState: State): Reducer {
  return createReducer(initState, (builder) => {
    builder
      .addCase(addTaskActionCreator, (state, action: Action) => {
        const newState = [...state];
        newState.push(action.payload);
        return newState;
      })
      .addCase(updateTaskActionCreator, (state, action: Action) => {
        state.forEach((el) => {
          if (el.id === action.payload.id) {
            Object.keys(action.payload).forEach((key) => {
              // eslint-disable-next-line no-param-reassign
              el[key] = action.payload[key];
            });
          }
        });
        return state;
      })
      .addCase(deleteTaskActionCreator, (state, action: Action) => {
        const newState = [...state].filter((el) => el.id !== action.payload);
        return newState;
      })
      .addCase(
        loadTaskListFromStorageActionCreator,
        (state, action: Action) => {
          const newState = [];
          action.payload.forEach((task: Task) => {
            newState.push(task);
          });
          return newState;
        }
      );
  });
}
