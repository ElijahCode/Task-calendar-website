import { createAction } from "@reduxjs/toolkit";

export const addTaskActionCreator = createAction<Task>("ADD_TASK");
export const updateTaskActionCreator = createAction("UPDATE_TASK");
export const deleteTaskActionCreator = createAction("DELETE_TASK");
