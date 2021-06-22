import { EnhancedStore } from "@reduxjs/toolkit";
import { taskListRender } from "./taskListRender";

export function filterBlockRender(store: EnhancedStore): void {
  const state = store.getState();
  const appBlock = document.querySelector(".app");
  const filterBlock = document.createElement("div");
  filterBlock.innerHTML = `<div class="fliterBlock"><input type="radio" value="NotFiltered" name="CheckBox" id="Case1"><label for="Case1">Not filter</label><input type="radio" value="filteredByStatus_done" name="CheckBox" id="Case2><label for="Case2">Filter by status: done</label></div>`;

  filterBlock.addEventListener("click", (event) => {
    const target = event.target as HTMLInputElement;
    if (target.matches("input")) {
      const inputValue = target.value;
      const filteredStateByStatusDone = state.filter(
        (el) => el.status === "done"
      );
      switch (inputValue) {
        case "NotFiltered":
          taskListRender(store.getState());
          break;
        case "filteredByStatus_done":
          taskListRender(filteredStateByStatusDone);
          break;
        default:
          break;
      }
    }
  });

  appBlock.append(filterBlock);
}
