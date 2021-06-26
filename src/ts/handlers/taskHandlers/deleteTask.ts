import { HistoryRouter } from "@elijahcode/router/dist/HistoryRouter/HistoryRouter";
import { LocalStorage } from "@elijahcode/taskcalendarapi";
import { EnhancedStore } from "@reduxjs/toolkit";
import { deleteTaskActionCreator } from "../../actions/actions";
import { taskListRender } from "../../renders/listRender/taskListRender";
import { createViewTaskHandler } from "../createViewTaskHandler/createViewTaskHandler";

export function createDeleteTaskFunction(
  store: EnhancedStore,
  localStorage: LocalStorage.TaskCalendar,
  router: HistoryRouter
) {
  return async (event): Promise<void> => {
    const taskID = Number((event.target as HTMLDivElement).id);
    const [deletedTask] = store.getState().filter((el) => el.id === taskID);
    await localStorage.delete(taskID);
    store.dispatch(deleteTaskActionCreator(taskID));

    // eslint-disable-next-line no-restricted-globals
    const path = location.pathname;
    const eventMock = {
      target: {
        date: deletedTask.date,
        id: deletedTask.date
          .match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/)[0]
          .split("-")[2],
      },
    };

    if (/task-at/.test(path)) {
      createViewTaskHandler(store, router)(eventMock);
    } else if (path === "/list") {
      taskListRender(store.getState());
    }
  };
}
