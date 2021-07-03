import { EnhancedStore } from "@reduxjs/toolkit";
import { fuzzySearchCreator } from "../../fuzzy-searchFunCreator/fuzzy-searchFunCreator";

export function createInputAutoCompleteHandler(store: EnhancedStore) {
  return (event: Event): void => {
    const string = (event.target as HTMLInputElement).value;
    const searcher = fuzzySearchCreator(store);
    const result: Task[] = (searcher.search(string) as unknown) as Task[];

    const dataList = document.getElementById(
      "descriptionList"
    ) as HTMLDataListElement;
    dataList.innerHTML = "";

    if (string !== "") {
      result.forEach((el: Task) => {
        const option = document.createElement("option");
        option.innerHTML = el.description;

        dataList.append(option);
      });
    }
  };
}
