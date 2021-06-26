import { configureStore } from "@reduxjs/toolkit";
import { calendarRender } from "./calendarRender";
import "../../types";

const layout = document.createElement("div");
layout.innerHTML = `
<div class="app">
</div>
`;

document.body.append(layout);

const inputDate = new Date(2021, 5, 1).valueOf();

const state: State = [
  {
    date: new Date(2021, 5, 10).toString(),
    description: "Call friend",
    status: "done",
    tag: "low priority",
  },
  {
    date: new Date(2021, 5, 15).toString(),
    description: "Call sister",
    status: "in work",
    tag: "high priority",
  },
  {
    date: new Date(2021, 5, 20).toString(),
    description: "Call boss",
    status: "waiting to get it in work",
    tag: "regular priority",
  },
];

const store = configureStore({
  preloadedState: state,
  reducer: (storageState, action) => storageState,
});

store.dispatch({ type: "SOME_ACTION" });

const emptyStore = configureStore({
  preloadedState: [],
  reducer: (storageState, action) => storageState,
});

describe("Testing calenderRender function", () => {
  it("Testing basic render", () => {
    calendarRender(emptyStore, inputDate);
    const table: HTMLTableElement = document.querySelector(".calendarTable");
    expect(document.querySelector(".calendarTable")).toBeTruthy();

    expect(document.querySelector(".tableCaption")).toBeTruthy();
    expect(document.querySelector(".button_goBack")).toBeTruthy();
    expect(document.querySelector(".tableCaptionText")).toBeTruthy();
    expect(document.querySelector(".button_goForward")).toBeTruthy();
    expect(document.querySelector(".row_daysOfWeek")).toBeTruthy();
    expect(document.querySelectorAll(".cell_dayOfWeek").length).toBe(7);

    expect(table.rows[0].cells.length).toBe(7);

    expect(document.querySelectorAll(".cell_date").length).toBe(30);
    expect(document.querySelectorAll(".cell_empty").length).toBe(5);
  });

  it("Testing render with influence of state", () => {
    calendarRender(store);

    expect(document.querySelectorAll(".cell_haveTask").length).toBe(3);
  });
});
