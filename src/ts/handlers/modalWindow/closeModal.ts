export function closeModalChooseAction(): void {
  const modal: HTMLDivElement = document.querySelector(".modal-choose-action");
  modal.style.visibility = "hidden";
}

export function closeModalAddTask(): void {
  const modal: HTMLDivElement = document.querySelector(".modal-add-task");
  modal.style.visibility = "hidden";
}

export function closeModalChangeTask(): void {
  const modal: HTMLDivElement = document.querySelector(".modal-change-task");
  modal.style.visibility = "hidden";
}

export function closeModalDeleteTask(): void {
  const modal: HTMLDivElement = document.querySelector(".modal-delete-task");
  modal.style.visibility = "hidden";
}
