import { LocalStorage } from "@elijahcode/taskcalendarapi";
import { EnhancedStore } from "@reduxjs/toolkit";
import { updateTaskActionCreator } from "../actions/actions";
import { closeModalChangeTask } from "../handlers/modalWindow/closeModal";
import { listRender } from "../renders/listRender";

export async function createUpdateTaskFunction(
  store: EnhancedStore,
  localStorage: LocalStorage.TaskCalendar
) {
  return async function updateTaskHandler(event): Promise<void> {
    const taskID = Number((event.target as HTMLDivElement).id);
    const state: Task[] = store.getState();
    const changedTask = { ...state.filter((el: Task) => el.id === taskID)[0] };

    const newDate: HTMLInputElement = document.querySelector(
      ".modal-change-task-input-date"
    );
    const newDescription: HTMLInputElement = document.querySelector(
      ".modal-change-task-input-description"
    );
    const newStatus: HTMLInputElement = document.querySelector(
      ".modal-change-task-input-status"
    );
    const newTag: HTMLInputElement = document.querySelector(
      ".modal-change-task-input-tag"
    );

    const newTask = {
      date: newDate.value,
      description: newDescription.value,
      status: newStatus.value,
      tag: newTag.value,
    };

    Object.keys(newTask).forEach((key) => {
      if (newTask[key] !== "") {
        changedTask[key] = newTask[key];
      }
    });

    await localStorage.update(taskID, changedTask);
    store.dispatch(updateTaskActionCreator(changedTask));

    newDate.value = "";
    newDescription.value = "";
    newStatus.value = "";
    newTag.value = "";

    closeModalChangeTask();

    listRender(store.getState());
  };
}
