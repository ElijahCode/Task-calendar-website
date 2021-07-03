import { EnhancedStore } from "@reduxjs/toolkit";
import { giveIDToTask } from "./giveIDToTask";
import "../types";

describe("Test createID function", () => {
  const task: Task = {
    date: Date.now().toString(),
    description: "Test task",
    status: "done",
    tag: "low priority",
  };

  const pseudoStore = {
    state: [],
    getState() {
      return this.state;
    },
  };

  while (pseudoStore.state.length < 999) {
    pseudoStore.state.push(
      giveIDToTask(task, (pseudoStore as unknown) as EnhancedStore)
    );
  }

  it("Task must have a different id's", () => {
    const result = [];
    const idList = pseudoStore.getState().reduce((acc, curr) => {
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
