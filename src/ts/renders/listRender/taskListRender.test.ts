import { taskListRender } from "./taskListRender";
import "../../types";

document.body.innerHTML = `
<div class="app"></div>
`;
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

const result = `<div class="taskItem" id="1"><div class="app_list_supportBlock1"><p class="taskDateHeader">10 June 2021 00:00</p><p class="taskDescription">Description: Call friend</p><p class="taskStatus">Status: done</p><p class="taskTag">Tag: low priority</p></div><div class="app_list_supportBlock2"><button class="button-delete-this-task"><img src="https://image.flaticon.com/icons/png/512/4974/4974939.png"></button></div></div><div class="taskItem" id="2"><div class="app_list_supportBlock1"><p class="taskDateHeader">15 June 2021 00:00</p><p class="taskDescription">Description: Call sister</p><p class="taskStatus">Status: in work</p><p class="taskTag">Tag: high priority</p></div><div class="app_list_supportBlock2"><button class="button-delete-this-task"><img src="https://image.flaticon.com/icons/png/512/4974/4974939.png"></button></div></div>`;

describe("Testing listRender", () => {
  it("Testing functionality", () => {
    taskListRender(state);
    expect(document.querySelector(".taskList").innerHTML).toBe(result);
  });
});
