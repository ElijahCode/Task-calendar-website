import {
  activateModalAddTask,
  activateModalChangeTask,
  activateModalDeleteTask,
} from "./activateModal";

const layout = document.createElement("div");
layout.innerHTML = `<div class = "modal-add-task"></div>
<div class = "modal-change-task"></div>
<div class = "modal-delete-task"></div><div class="tableCaption">June 2021</div>
<input class="modal-add-task-input-date" value="">
<input class="modal-add-task-input-status" value="">
<input class="modal-add-task-input-tag" value="">
<div class='taskItem'><button class=button-change-task></button></div>
<div class="taskItem"><button class=button-delete-task></button>
<div class="modal-overlay"></div>`;
document.body.append(layout);

const addTaskDiv: HTMLDivElement = document.querySelector(".modal-add-task");
const changeTaskDiv: HTMLDivElement = document.querySelector(
  ".modal-change-task"
);
const deleteTaskDiv: HTMLDivElement = document.querySelector(
  ".modal-delete-task"
);

addTaskDiv.style.visibility = "hidden";
changeTaskDiv.style.visibility = "hidden";
deleteTaskDiv.style.visibility = "hidden";

describe("Test activate function", () => {
  it("Test activateModalFunction", () => {
    const elem = document.createElement("td");
    elem.id = "20";

    const ev = {
      target: elem,
    };

    activateModalAddTask((ev as unknown) as Event);
    expect(addTaskDiv.classList.contains("modal_active")).toBeTruthy();
    expect(addTaskDiv.classList.contains("modal_closed")).toBeFalsy();
    expect(
      (document.querySelector(".modal-add-task-input-date") as HTMLInputElement)
        .value
    ).toBe("2021-06-20 00:00");
  });
  it("Test chagneModalFunction", () => {
    const targetParent = document.createElement("div");
    targetParent.classList.add("taskItem");
    targetParent.id = "5";
    const targetBut = document.createElement("button");
    targetParent.append(targetBut);

    const event = {
      target: targetBut,
    };
    activateModalChangeTask((event as unknown) as Event);
    expect(changeTaskDiv.classList.contains("modal_active")).toBeTruthy();
    expect(changeTaskDiv.classList.contains("modal_closed")).toBeFalsy();
  });
  it("Test deleteModalFunction", () => {
    const targetParent = document.createElement("div");
    targetParent.classList.add("taskItem");
    targetParent.id = "5";
    const targetBut = document.createElement("button");
    targetParent.append(targetBut);

    const event = {
      target: targetBut,
    };
    activateModalDeleteTask((event as unknown) as Event);
    expect(deleteTaskDiv.classList.contains("modal_active")).toBeTruthy();
    expect(deleteTaskDiv.classList.contains("modal_closed")).toBeFalsy();
  });
});
