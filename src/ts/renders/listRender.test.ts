import { listRender } from "./listRender";
import "../types";

document.body.innerHTML = `
<div class="app"></div>
`;

const state: State = {
  calendarMenuDate: Date.now(),
  Tasks: [
    {
      date: new Date(2021, 5, 10, 14, 30).toString(),
      description: "Call friend",
      status: "done",
      tag: "low priority",
    },
    {
      date: new Date(2021, 5, 15, 20, 15).toString(),
      description: "Call sister",
      status: "in work",
      tag: "high priority",
    },
  ],
};

const result = `<div class="taskItem"><p class="taskDateHeader">10 June 2021 14:30</p><p class="taskDescription">Description: Call friend</p><p class="taskStatus">Status: done</p><p class="taskTag">Tag: low priority</p></div><div class="taskItem"><p class="taskDateHeader">15 June 2021 20:15</p><p class="taskDescription">Description: Call sister</p><p class="taskStatus">Status: in work</p><p class="taskTag">Tag: high priority</p></div>`;

describe("Testing listRender", () => {
  it("Testing functionality", () => {
    listRender(state);
    expect(document.querySelector(".taskList").innerHTML).toBe(result);
  });
});
