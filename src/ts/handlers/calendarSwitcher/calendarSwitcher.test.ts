// eslint-disable-next-line import/no-extraneous-dependencies
import { createStore } from "redux";
import { createCalendarSwitchers } from "./calendarSwithcer";

describe("Test createClandarSwicher function", () => {
  const store = createStore(() => 1);
  const date = new Date();
  it("return array with 2 elemetns", () => {
    expect(createCalendarSwitchers(store, date).length).toBe(2);
  });
});
