import {
  closeModalAddTask,
  closeModalChangeTask,
  closeModalDeleteTask,
} from "./closeModal";

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

addTaskDiv.style.visibility = "visible";
changeTaskDiv.style.visibility = "visible";
deleteTaskDiv.style.visibility = "visible";

describe("Test activate function", () => {
  it("Test activateModalFunction", () => {
    closeModalAddTask();
    expect(addTaskDiv.style.visibility).toBe("hidden");
  });
  it("Test chagneModalFunction", () => {
    closeModalChangeTask();
    expect(changeTaskDiv.style.visibility).toBe("hidden");
  });
  it("Test deleteModalFunction", () => {
    closeModalDeleteTask();
    expect(deleteTaskDiv.style.visibility).toBe("hidden");
  });
});
