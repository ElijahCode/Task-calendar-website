import { EnhancedStore } from "@reduxjs/toolkit";
import { filterBlockRender } from "./filterBlockRender";
import { taskListRender } from "./taskListRender";

export function listRender(store: EnhancedStore): void {
  const appBlock = document.querySelector(".app");
  appBlock.innerHTML = "";

  filterBlockRender(store);
  taskListRender(store.getState());
}
