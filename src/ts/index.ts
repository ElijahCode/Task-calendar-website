import { createRouter } from "@elijahcode/router";
import { LocalStorage } from "@elijahcode/taskcalendarapi";
import { configureStore } from "@reduxjs/toolkit";
import { fuzzySearchCreator } from "./fuzzy-searchFunCreator/fuzzy-searchFunCreator";
import { storeReducerCreator } from "./storeReducer/storeReducer";
import { loadTaskListFromStorageActionCreator } from "./actions/actions";
import { calendarRender } from "./renders/calendarRender/calendarRender";
import { listRender } from "./renders/listRender/listRender";
import { aboutRender } from "./renders/aboutRender/aboutRender";
import {
  closeModalAddTask,
  closeModalChangeTask,
  closeModalDeleteTask,
} from "./handlers/modalWindow/closeModal";
import { addTaskHandler } from "./handlers/taskHandlers/addTaskHandler";
import { createSearchHandler } from "./handlers/searchHandlers/createSearchHandler";
import { createInputAutoCompleteHandler } from "./handlers/searchHandlers/createInputAutoCompleteHandler";
import { createUpdateTaskFunction } from "./handlers/taskHandlers/updateTaskHandler";
import { createDeleteTaskFunction } from "./handlers/taskHandlers/deleteTask";
import "./css/style.css";

(async function main() {
  const router = createRouter("history");
  const localTaskStorage = new LocalStorage.TaskCalendar();
  const tasks = await localTaskStorage.read();
  const initialState = tasks;
  const storeReducer = storeReducerCreator(initialState);
  const store = configureStore({
    reducer: storeReducer,
    preloadedState: initialState,
  });

  const updateTask = createUpdateTaskFunction(store, localTaskStorage);
  const deleteTask = createDeleteTaskFunction(store, localTaskStorage);

  const searchHandler = createSearchHandler(store, router);
  const inputAutoCompleteHandler = createInputAutoCompleteHandler(store);

  store.dispatch(loadTaskListFromStorageActionCreator(tasks as Task[]));

  router.on("/calendar", { onEnter: calendarRender.bind(null, store) });
  router.on("/list", { onEnter: listRender });
  router.on("/about", { onEnter: aboutRender });

  window.onpopstate = (event) => {
    event.preventDefault();
    // eslint-disable-next-line no-restricted-globals
    const path = location.pathname;
    switch (path) {
      case "/calendar":
        calendarRender(store);
        break;
      case "/list":
        listRender(store, router);
        break;
      case "/list/showAll":
        listRender(store, router);
        break;
      case "/list/showDone":
        listRender(store, router);
        document.getElementById("Case2").click();
        break;
      default:
        aboutRender();
    }
  };

  document.body.addEventListener("click", (ev) => {
    if ((ev.target as HTMLElement).matches("a")) {
      ev.preventDefault();
      const url = (ev.target as HTMLElement).getAttribute("href");

      if (url === "/list") {
        router.go(url, { onEnter: [store, router] });
      } else {
        router.go(url);
      }
    }
  });

  document
    .querySelector(".button_search")
    .addEventListener("click", searchHandler);

  document
    .querySelector(".searchInput")
    .addEventListener("keydown", (event) => {
      if ((event as KeyboardEvent).code === "Enter") {
        searchHandler();
      }
    });

  document
    .querySelector(".searchInput")
    .addEventListener("input", inputAutoCompleteHandler);

  (document.querySelector(
    ".button-add-task"
  ) as HTMLButtonElement).addEventListener(
    "click",
    addTaskHandler.bind(null, store, localTaskStorage),
    true
  );

  document
    .querySelector(".button-change-task")
    .addEventListener("click", await updateTask);

  document
    .querySelector(".button-delete-task")
    .addEventListener("click", await deleteTask);

  document
    .querySelector(".button-add-task-cancel")
    .addEventListener("click", closeModalAddTask);
  document
    .querySelector(".button-change-task-cancel")
    .addEventListener("click", closeModalChangeTask);
  document
    .querySelector(".button-delete-task-cancel")
    .addEventListener("click", closeModalDeleteTask);
})();
