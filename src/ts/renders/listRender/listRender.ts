import { HistoryRouter } from "@elijahcode/router/dist/HistoryRouter/HistoryRouter";
import { EnhancedStore } from "@reduxjs/toolkit";
import { filterBlockRender } from "../listRender/filterBlockRender";
import { taskListRender } from "./taskListRender";

export function listRender(store: EnhancedStore, router: HistoryRouter): void {
  const appBlock = document.querySelector(".app");
  appBlock.innerHTML = "";

  filterBlockRender(store, router);
  taskListRender(store.getState());
}
