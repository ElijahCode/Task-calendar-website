import { HistoryRouter } from "@elijahcode/router/dist/HistoryRouter/HistoryRouter";
import { EnhancedStore } from "@reduxjs/toolkit";
import { fuzzySearchCreator } from "../../fuzzy-searchFunCreator/fuzzy-searchFunCreator";
import { listRender } from "../../renders/listRender/listRender";
import { taskListRender } from "../../renders/listRender/taskListRender";

export function createSearchHandler(
  store: EnhancedStore,
  router: HistoryRouter
): () => void {
  return () => {
    const searchInput: HTMLInputElement = document.querySelector(
      ".searchInput"
    );
    const searcher = fuzzySearchCreator(store);

    const result: Task[] = (searcher.search(
      searchInput.value
    ) as unknown) as Task[];

    let url = "";

    if (result.length > 0 && searchInput.value !== "") {
      result.forEach((el: Task, index) => {
        if (
          (index === 0 && result.length === 1) ||
          index === result.length - 1
        ) {
          url += `${el.description.replace(" ", "-")}`;
        } else {
          url += `${el.description.replace(" ", "-")}+`;
        }
      });

      router.go(`/list/${url}`);

      listRender(store, router);
      taskListRender(result);

      searchInput.value = "";
    } else {
      const appBlock: HTMLDivElement = document.querySelector(".app");
      appBlock.innerHTML =
        '<p class="SearchError">Tasks not found. Try again.</p>';
    }
  };
}
