import { listRender } from "./listRender";
import "../types";

document.body.innerHTML = `
<div class="app"></div>
`;
// 2021-05-10
const state: State = [
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

const result = `<div class="taskItem" id="1"><p class="taskDateHeader">10 June 2021 00:00</p><p class="taskDescription">Description: Call friend</p><p class="taskStatus">Status: done</p><p class="taskTag">Tag: low priority</p></div><div class="taskItem" id="2"><p class="taskDateHeader">15 June 2021 00:00</p><p class="taskDescription">Description: Call sister</p><p class="taskStatus">Status: in work</p><p class="taskTag">Tag: high priority</p></div>`;

describe("Testing listRender", () => {
  it("Testing functionality", () => {
    listRender(state);
    expect(document.querySelector(".taskList").innerHTML).toBe(result);
  });
});
