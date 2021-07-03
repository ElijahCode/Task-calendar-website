import {
  closeModalAddTask,
  closeModalChangeTask,
  closeModalDeleteTask,
} from "./closeModal";

const layout = document.createElement("div");
layout.innerHTML = `<div class = "modal-add-task"></div><div class = "modal-change-task"></div><div class = "modal-delete-task"></div><div class="modal-overlay"></div>`;
document.body.append(layout);

const addTaskDiv: HTMLDivElement = document.querySelector(".modal-add-task");
const changeTaskDiv: HTMLDivElement = document.querySelector(
  ".modal-change-task"
);
const deleteTaskDiv: HTMLDivElement = document.querySelector(
  ".modal-delete-task"
);

addTaskDiv.style.visibility = "visible";
changeTaskDiv.style.visibility = "visible";
deleteTaskDiv.style.visibility = "visible";

describe("Test activate function", () => {
  it("Test activateModalFunction", () => {
    closeModalAddTask();
    expect(addTaskDiv.classList.contains("modal_closed")).toBeTruthy();
    expect(addTaskDiv.classList.contains("modal_active")).toBeFalsy();
  });
  it("Test chagneModalFunction", () => {
    closeModalChangeTask();
    expect(changeTaskDiv.classList.contains("modal_closed")).toBeTruthy();
    expect(changeTaskDiv.classList.contains("modal_active")).toBeFalsy();
  });
  it("Test deleteModalFunction", () => {
    closeModalDeleteTask();
    expect(deleteTaskDiv.classList.contains("modal_closed")).toBeTruthy();
    expect(deleteTaskDiv.classList.contains("modal_active")).toBeFalsy();
  });
});
