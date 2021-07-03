import { HistoryRouter } from "@elijahcode/router/dist/HistoryRouter/HistoryRouter";
import { createStore } from "@reduxjs/toolkit";
import { listRender } from "./listRender";

describe("", () => {
  document.body.innerHTML = `<div class="app"></div>`;

  const preLoadedState = [
    {
      date: "2021-06-10",
      description: "Call friend",
      status: "done",
      tag: "low priority",
      id: 1,
    },
    {
      date: "2021-06-15",
      description: "Call sister",
      status: "in work",
      tag: "high priority",
      id: 2,
    },
  ];

  const store = createStore((state) => state, preLoadedState);
  const router = new HistoryRouter();

  listRender(store, router);

  it("Must contain filter block", () => {
    expect(document.querySelector(".filterBlock")).toBeTruthy();
  });
  it("Must contain button block", () => {
    expect(document.querySelector(".buttonBlock")).toBeTruthy();
  });
  it("Must contain task block", () => {
    expect(document.querySelector(".taskList")).toBeTruthy();
  });
});
