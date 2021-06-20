import { configureStore } from "@reduxjs/toolkit";
import { createID } from "./createID";
import "../types";

describe("Test createID function", () => {
  const task: Task = {
    date: Date.now().toString(),
    description: "Test task",
    status: "done",
    tag: "low priority",
  };
  let initState: Task[] = [];

  while (initState.length < 15) {
    initState.push(task);
  }

  const store = configureStore({
    preloadedState: initState,
    reducer: (state, action) => action.payload,
  });
  store.dispatch({ type: "ACTION", payload: initState });
  it("Task must have a different id's", () => {
    initState = initState.map((el) => createID(el, store));
    store.dispatch({ type: "ACTION", payload: initState });
    const result = [];
    const idList = store.getState().reduce((acc, curr) => {
      acc.push(curr.id);
      return acc;
    }, []);
    idList.sort();
    idList.forEach((el, index) => {
      if (el === idList[index + 1]) {
        result.push(el);
      }
    });
    expect(result.length).toBe(0);
  });
});
