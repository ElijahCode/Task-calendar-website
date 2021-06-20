import { createReducer } from "@reduxjs/toolkit";
import {
  addTaskActionCreator,
  updateTaskActionCreator,
  deleteTaskActionCreator,
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
      });
  });
}

// export const storeReducer = createReducer([], (builder) => {
//   builder
//     .addCase(addTaskActionCreator, (state, action: Action) => {
//       state.push(action.task);
//     })
//     .addCase(updateTaskActionCreator, (state, action: Action) => {
//       const newState = [...state];
//       newState.forEach((el) => {
//         if (el.id === action.payload.task.id) {
//           Object.keys(action.payload.task).forEach((key) => {
//             // eslint-disable-next-line no-param-reassign
//             el[key] = action.task[key];
//           });
//         }
//       });
//       state.splice(0);
//       state.push(...newState);
//     })
//     .addCase(deleteTaskActionCreator, (state, action: Action) => {
//       const newState = [...state].filter((el) => el.id !== action.payload.task.id);
//       state.splice(0);
//       state.push(...newState);
//     });
// });
