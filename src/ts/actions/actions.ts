import { createAction } from "@reduxjs/toolkit";

export const addTaskActionCreator = createAction<Task>("ADD_TASK");
export const updateTaskActionCreator = createAction<Task>("UPDATE_TASK");
export const deleteTaskActionCreator = createAction<Task["id"]>("DELETE_TASK");
export const loadTaskListFromStorageActionCreator = createAction<Task[]>(
  "LOAD_TASK_LIST"
);
