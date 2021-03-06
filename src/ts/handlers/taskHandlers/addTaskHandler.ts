import { LocalStorage } from "@elijahcode/taskcalendarapi";
import { EnhancedStore } from "@reduxjs/toolkit";
import { closeModalAddTask } from "../modalWindow/closeModal";
import { addTaskActionCreator } from "../../actions/actions";
import { taskListRender } from "../../renders/listRender/taskListRender";
import { calendarRender } from "../../renders/calendarRender/calendarRender";
import { giveIDToTask } from "../../giveIDToTask/giveIDToTask";

export async function addTaskHandler(
  store: EnhancedStore,
  localStorage: LocalStorage.TaskCalendar
): Promise<void> {
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

  let newTask: Task = {
    date: inputDate.value,
    description: inputDescription.value,
    status: inputStatus.value as Task["status"],
    tag: inputTag.value as Task["tag"],
  };

  newTask = giveIDToTask(newTask, store);

  await localStorage.createTask(newTask);
  store.dispatch(addTaskActionCreator(newTask));

  inputDate.value = "";
  inputDescription.value = "";
  inputStatus.value = "";
  inputTag.value = "";

  closeModalAddTask();

  if (document.querySelector(".taskList")) {
    taskListRender(store.getState());
  }

  const normalizeToParseDate =
    newTask.date.split(" ").length > 1
      ? newTask.date.split(" ").join("T")
      : newTask.date;

  if (document.querySelector(".calendarTable")) {
    calendarRender(store, Date.parse(normalizeToParseDate));
  }
}
