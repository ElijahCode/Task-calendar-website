import { createRouter } from "@elijahcode/router";
import { LocalStorage } from "@elijahcode/taskcalendarapi";
import { configureStore } from "@reduxjs/toolkit";
import { storeReducer } from "./storeReducer/storeReducer";
import { calendarRender } from "./renders/calendarRender";
import { listRender } from "./renders/listRender";
import { aboutRender } from "./renders/aboutRender";
import {
  closeModalAddTask,
  closeModalChangeTask,
  closeModalDeleteTask,
} from "./handlers/closeModal";
import "./css/style.css";

const router = createRouter("history");
const localTaskStorage = new LocalStorage.TaskCalendar();
const initialState = [];

const store = configureStore({
  reducer: storeReducer,
  preloadedState: initialState,
});

router.on("/calendar", { onEnter: calendarRender });
router.on("/list", { onEnter: listRender });
router.on("/about", { onEnter: aboutRender });

document.body.addEventListener("click", (ev) => {
  if ((ev.target as HTMLElement).matches("a")) {
    ev.preventDefault();
    const url = (ev.target as HTMLElement).getAttribute("href");
    router.go(url);
  }
});

document
  .querySelector(".button-add-task-cancel")
  .addEventListener("click", closeModalAddTask);
document
  .querySelector(".button-change-task-cancel")
  .addEventListener("click", closeModalChangeTask);
document
  .querySelector(".button-delete-task-cancel")
  .addEventListener("click", closeModalDeleteTask);
