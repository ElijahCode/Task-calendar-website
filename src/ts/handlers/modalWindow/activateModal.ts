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
  modal.style.visibility = "visible";

  const inputDate: HTMLInputElement = document.querySelector(
    ".modal-add-task-input-date"
  );
  const tableCaption: HTMLTableCaptionElement = document.querySelector(
    ".tableCaption"
  );

  let day = (ev.target as HTMLTableCellElement).innerText;
  day = day.length > 1 ? day : 0 + day;

  const [month, year] = tableCaption.innerHTML
    .match(/([a-zA-Z]{1,} [0-9]{4})/gm)[0]
    .split(" ");
  let numberOfMonth = (months.indexOf(month) + 1).toString();
  numberOfMonth = numberOfMonth.length > 1 ? numberOfMonth : 0 + numberOfMonth;
  inputDate.value = `${year}-${numberOfMonth}-${day}`;
}

export function activateModalChangeTask(): void {
  const modal: HTMLDivElement = document.querySelector(".modal-change-task");
  modal.style.visibility = "visible";
}

export function activateModalDeleteTask(): void {
  const modal: HTMLDivElement = document.querySelector(".modal-delete-task");
  modal.style.visibility = "visible";
}
