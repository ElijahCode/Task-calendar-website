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
<button class=button-change-task><>`;
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
    elem.innerText = "20";

    const ev = {
      target: elem,
    };

    activateModalAddTask(ev);
    expect(addTaskDiv.style.visibility).toBe("visible");
    expect(
      (document.querySelector(".modal-add-task-input-date") as HTMLInputElement)
        .value
    ).toBe("2021-06-20");
  });
  it("Test chagneModalFunction", () => {
    const targetParent = document.createElement("div");
    targetParent.id = "5";
    const targetBut = document.createElement("button");
    targetParent.append(targetBut);

    const event = {
      target: targetBut,
    };
    activateModalChangeTask(event);
    expect(changeTaskDiv.style.visibility).toBe("visible");
  });
  it("Test deleteModalFunction", () => {
    activateModalDeleteTask();
    expect(deleteTaskDiv.style.visibility).toBe("visible");
  });
});
