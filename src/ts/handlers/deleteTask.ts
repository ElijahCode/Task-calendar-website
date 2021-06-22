import { LocalStorage } from "@elijahcode/taskcalendarapi";
import { EnhancedStore } from "@reduxjs/toolkit";
import { deleteTaskActionCreator } from "../actions/actions";
import { listRender } from "../renders/listRender";

export async function createDeleteTaskFunction(
  store: EnhancedStore,
  localStorage: LocalStorage.TaskCalendar
) {
  return async (event): Promise<void> => {
    const taskID = Number((event.target as HTMLDivElement).id);

    await localStorage.delete(taskID);
    store.dispatch(deleteTaskActionCreator(taskID));

    listRender(store.getState());
  };
}