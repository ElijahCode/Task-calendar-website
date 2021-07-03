import { HistoryRouter } from "@elijahcode/router/dist/HistoryRouter/HistoryRouter";
import { createStore } from "@reduxjs/toolkit";
import { filterBlockRender } from "./filterBlockRender";

describe("filterBlockRender testing", () => {
  const layout = document.createElement("div");
  layout.innerHTML = `<div class="app"></div>`;
  document.body.append(layout);

  const store = createStore((state) => state);
  const router = new HistoryRouter();
  filterBlockRender(store, router);

  it("Must contain filterBlock", () => {
    expect(document.querySelector(".filterBlock")).toBeTruthy();
  });
  it("Must contain input #1", () => {
    expect(document.getElementById("Case1")).toBeTruthy();
  });
  it("Must contain input #2", () => {
    expect(document.getElementById("Case2")).toBeTruthy();
  });
});
