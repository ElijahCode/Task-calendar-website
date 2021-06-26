import { EnhancedStore } from "@reduxjs/toolkit";
import { activateModalChooseAction } from "../../handlers/modalWindow/activateModal";
import { createCalendarSwitchers } from "../../handlers/calendarSwitcher/calendarSwithcer";

export function calendarRender(store: EnhancedStore, date?: number): void {
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

  const daysOfWeek = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const state = store.getState();

  // if(document.querySelector('.calendarTable')){
  //   document.querySelector('.app').innerHTML = ''
  // }

  const insideDate = date !== undefined ? new Date(date) : new Date();
  const table: HTMLTableElement = document.createElement("table");
  table.classList.add("calendarTable");

  const tableCaption = table.createCaption();
  tableCaption.classList.add("tableCaption");
  tableCaption.innerHTML = `<button class = "button_goBack"><img src="https://image.flaticon.com/icons/png/512/481/481158.png"></button><p class=tableCaptionText>${
    months[insideDate.getMonth()]
  } ${insideDate.getFullYear()}</p><button class = "button_goForward"><img src="https://image.flaticon.com/icons/png/512/481/481157.png"></button>`;

  table.insertRow();
  table.rows[0].classList.add("row_daysOfWeek");

  for (let i = 1; i < 7; i += 1) {
    const cell = table.rows[0].insertCell();
    cell.classList.add("cell_dayOfWeek");
    cell.innerText = `${daysOfWeek[i]}`;
    if (i === 6) {
      const lastcell = table.rows[0].insertCell();
      lastcell.classList.add("cell_dayOfWeek");
      lastcell.innerText = `${daysOfWeek[0]}`;
    }
  }

  const workDate = new Date(insideDate.getFullYear(), insideDate.getMonth(), 1);

  while (workDate.getMonth() === insideDate.getMonth()) {
    if (
      workDate.getDate() === 1 ||
      table.rows[table.rows.length - 1].cells[6].innerText.toString() !== ""
    ) {
      const newRow = table.insertRow();
      newRow.classList.add("row_day");
      for (let i = 0; i < 7; i += 1) {
        const newCell = newRow.insertCell();
        newCell.innerText = "";
        newCell.classList.add("cell_empty");
      }
    }
    const changedCell =
      table.rows[table.rows.length - 1].cells[workDate.getDay()];
    changedCell.innerText = `${workDate.getDate()}`;
    changedCell.classList.remove("cell_empty");
    if (
      state &&
      state.filter((el) => {
        // new Date(el.date) === workDate).length > 0
        const stringWorkDate = `${workDate.getFullYear()}-${workDate.getMonth()}-${workDate.getDate()}`;
        const elDate = new Date(Date.parse(el.date));
        const stringELDate = `${elDate.getFullYear()}-${elDate.getMonth()}-${elDate.getDate()}`;
        return stringWorkDate === stringELDate;
      }).length > 0
    ) {
      changedCell.classList.add("cell_haveTask");
    } else {
      changedCell.classList.add("cell_date");
    }
    workDate.setDate(workDate.getDate() + 1);
  }

  table.addEventListener("click", (event) => {
    if (!(event.target as HTMLElement).matches("img")) {
      console.log(event.target);
      activateModalChooseAction(event);
    }
  });
  document.querySelector(".app").innerHTML = "";
  document.querySelector(".app").append(table);

  const [calendarIncrementer, calendarDecrementer] = createCalendarSwitchers(
    store,
    insideDate
  );

  document
    .querySelector(".button_goForward")
    .addEventListener("click", calendarIncrementer);
  document
    .querySelector(".button_goBack")
    .addEventListener("click", calendarDecrementer);
}
