import { HistoryRouter } from "@elijahcode/router/dist/HistoryRouter/HistoryRouter";
import { EnhancedStore } from "@reduxjs/toolkit";
import { listRender } from "../../renders/listRender/listRender";
import { taskListRender } from "../../renders/listRender/taskListRender";

export function createViewTaskHandler(
  store: EnhancedStore,
  router: HistoryRouter
) {
  return (event) => {
    const months = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ];

    let month;
    let numberOfMonth;
    let year;

    let day = (event.target as HTMLTableCellElement).id;
    day = day.length > 1 ? day : 0 + day;

    const tableCaption: HTMLTableCaptionElement = document.querySelector(
      ".tableCaption"
    );

    if (tableCaption) {
      [month, year] = tableCaption.innerHTML
        .match(/([a-zA-Z]{1,} [0-9]{4})/gm)[0]
        .split(" ");
      numberOfMonth = (months.indexOf(month) + 1).toString();
      numberOfMonth =
        numberOfMonth.length > 1 ? numberOfMonth : 0 + numberOfMonth;
    } else {
      [year, month] = event.target.date.split(" ")[0].split("-");
      numberOfMonth = month;
    }

    const date = `${year}-${numberOfMonth}-${day}`;

    const state = store.getState().filter((el: Task) => {
      if (/[0-9]{4}-[0-9]{2}-[0-9]{2}/.test(el.date)) {
        return el.date.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/gm)[0] === date;
      }
      return false;
    });
    if (tableCaption && state.length > 0) {
      listRender(store, router);
      taskListRender(state);
      router.go(`/list/task-at-${date}`);
    } else if (state.length > 0) {
      listRender(store, router);
      taskListRender(
        state.filter(
          (el: Task) =>
            el.date.match(/[0-9]{4}-[0-9]{2}-[0-9]{2}/gm)[0] === date
        )
      );
    } else {
      document.querySelector(
        ".app"
      ).innerHTML = `<p class="noTask">At ${date} you have not task</p>`;
    }
  };
}
