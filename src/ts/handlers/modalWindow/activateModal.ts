export function activateModalChooseAction(ev): void {
  const modal: HTMLDivElement = document.querySelector(".modal-choose-action");
  modal.classList.add("modal_active");
  modal.classList.remove("modal_closed");

  const modalOverlay: HTMLDivElement = document.querySelector(".modal-overlay");
  modalOverlay.classList.remove("modal_overlay_closed");
  modalOverlay.classList.add("modal_overlay_active");

  document.querySelector(".modal-choose-action-button-add").id =
    ev.target.innerText;
  document.querySelector(".modal-choose-action-button-view-or-update").id =
    ev.target.innerText;
}

export function activateModalAddTask(ev): void {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const modal: HTMLDivElement = document.querySelector(".modal-add-task");
  modal.classList.add("modal_active");
  modal.classList.remove("modal_closed");

  const modalOverlay: HTMLDivElement = document.querySelector(".modal-overlay");
  modalOverlay.classList.replace(
    "modal_overlay_closed",
    "modal_overlay_active"
  );

  const inputDate: HTMLInputElement = document.querySelector(
    ".modal-add-task-input-date"
  );
  const tableCaption: HTMLTableCaptionElement = document.querySelector(
    ".tableCaption"
  );

  if ((ev.target as HTMLTableCellElement).id) {
    let day = (ev.target as HTMLTableCellElement).id;
    day = day.length > 1 ? day : 0 + day;

    const [month, year] = tableCaption.innerHTML
      .match(/([a-zA-Z]{1,} [0-9]{4})/gm)[0]
      .split(" ");
    let numberOfMonth = (months.indexOf(month) + 1).toString();
    numberOfMonth =
      numberOfMonth.length > 1 ? numberOfMonth : 0 + numberOfMonth;
    inputDate.value = `${year}-${numberOfMonth}-${day} 00:00`;
  }
}

export function activateModalChangeTask(event): void {
  const modal: HTMLDivElement = document.querySelector(".modal-change-task");
  modal.classList.add("modal_active");
  modal.classList.remove("modal_closed");

  const modalOverlay: HTMLDivElement = document.querySelector(".modal-overlay");
  modalOverlay.classList.remove("modal_overlay_closed");
  modalOverlay.classList.add("modal_overlay_active");
  const taskBlockID = (event.target as HTMLElement).closest(".taskItem").id;
  document.querySelector(".button-change-task").id = taskBlockID;
}

export function activateModalDeleteTask(event): void {
  const modal: HTMLDivElement = document.querySelector(".modal-delete-task");
  modal.classList.add("modal_active");
  modal.classList.remove("modal_closed");

  const modalOverlay: HTMLDivElement = document.querySelector(".modal-overlay");
  modalOverlay.classList.remove("modal_overlay_closed");
  modalOverlay.classList.add("modal_overlay_active");
  const taskBlockID = (event.target as HTMLElement).closest(".taskItem").id;
  document.querySelector(".button-delete-task").id = taskBlockID;
}
