export function activateModalAddTask(): void {
  const modal: HTMLDivElement = document.querySelector(".modal-add-task");
  modal.style.visibility = "visible";
}

export function activateModalChangeTask(): void {
  const modal: HTMLDivElement = document.querySelector(".modal-change-task");
  modal.style.visibility = "visible";
}

export function activateModalDeleteTask(): void {
  const modal: HTMLDivElement = document.querySelector(".modal-delete-task");
  modal.style.visibility = "visible";
}
