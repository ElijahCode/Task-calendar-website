import { LocalStorage } from "@elijahcode/taskcalendarapi";
import { EnhancedStore } from "@reduxjs/toolkit";
import { closeModalAddTask } from "./modalWindow/closeModal";
import { addTaskActionCreator } from "../actions/actions";

export function addTaskHandler(
  store: EnhancedStore,
  localStorage: LocalStorage.TaskCalendar
): void {
  const inputDate: HTMLInputElement = document.querySelector(
    ".modal-add-task-input-date"
  );
  const inputDescription: HTMLInputElement = document.querySelector(
    ".modal-add-task-input-description"
  );
  const inputStatus: HTMLInputElement = document.querySelector(
    ".modal-add-task-input-status"
  );
  const inputTag: HTMLInputElement = document.querySelector(
    ".modal-add-task-input-tag"
  );

  const newTask: Task = {
    date: inputDate.value,
    description: inputDescription.value,
    status: inputStatus.value as Task["status"],
    tag: inputTag.value as Task["tag"],
  };

  localStorage.createTask(newTask);
  store.dispatch(addTaskActionCreator(newTask));
  console.log(store.getState());

  inputDate.value = "";
  inputDescription.value = "";
  inputStatus.value = "";
  inputTag.value = "";

  closeModalAddTask();
}
