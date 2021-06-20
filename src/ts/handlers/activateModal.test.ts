import {
  activateModalAddTask,
  activateModalChangeTask,
  activateModalDeleteTask,
} from "./activateModal";

const layout = document.createElement("div");
layout.innerHTML = `<div class = "modal-add-task"></div><div class = "modal-change-task"></div><div class = "modal-delete-task"></div>`;
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
    activateModalAddTask();
    expect(addTaskDiv.style.visibility).toBe("visible");
  });
  it("Test chagneModalFunction", () => {
    activateModalChangeTask();
    expect(changeTaskDiv.style.visibility).toBe("visible");
  });
  it("Test deleteModalFunction", () => {
    activateModalDeleteTask();
    expect(deleteTaskDiv.style.visibility).toBe("visible");
  });
});
