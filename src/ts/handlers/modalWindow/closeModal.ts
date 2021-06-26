export function closeModalChooseAction(): void {
  const modal: HTMLDivElement = document.querySelector(".modal-choose-action");
  modal.classList.add("modal_closed");
  modal.classList.remove("modal_active");
  const modalOverlay: HTMLDivElement = document.querySelector(".modal-overlay");
  modalOverlay.classList.remove("modal_overlay_active");
  modalOverlay.classList.add("modal_overlay_closed");
}

export function closeModalAddTask(): void {
  const modal: HTMLDivElement = document.querySelector(".modal-add-task");
  modal.classList.add("modal_closed");
  modal.classList.remove("modal_active");
  const modalOverlay: HTMLDivElement = document.querySelector(".modal-overlay");
  modalOverlay.classList.remove("modal_overlay_active");
  modalOverlay.classList.add("modal_overlay_closed");
  console.log(modalOverlay.classList);
}

export function closeModalChangeTask(): void {
  const modal: HTMLDivElement = document.querySelector(".modal-change-task");
  modal.classList.add("modal_closed");
  modal.classList.remove("modal_active");
  const modalOverlay: HTMLDivElement = document.querySelector(".modal-overlay");
  modalOverlay.classList.remove("modal_overlay_active");
  modalOverlay.classList.add("modal_overlay_closed");
}

export function closeModalDeleteTask(): void {
  const modal: HTMLDivElement = document.querySelector(".modal-delete-task");
  modal.classList.add("modal_closed");
  modal.classList.remove("modal_active");
  const modalOverlay: HTMLDivElement = document.querySelector(".modal-overlay");
  modalOverlay.classList.remove("modal_overlay_active");
  modalOverlay.classList.add("modal_overlay_closed");
}
