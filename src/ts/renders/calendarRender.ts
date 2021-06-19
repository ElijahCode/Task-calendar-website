export function calendarRender(state: State, date?: number): void {
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
  const insideDate = date !== undefined ? new Date(date) : new Date();
  const table: HTMLTableElement = document.createElement("table");
  table.classList.add("calendarTable");
  const tableCaption = table.createCaption();
  tableCaption.classList.add("tableCaption");
  tableCaption.innerHTML = `<button class = "button_goBack">&lArr;</button><p class=tableCaptionText>${
    months[insideDate.getMonth()]
  } ${insideDate.getFullYear()}</p><button class = "button_goForward">&rArr;</button>`;

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
      table.rows[table.rows.length - 1].cells[6].innerText !== undefined
    ) {
      const newRow = table.insertRow();
      newRow.classList.add("row_day");
      for (let i = 0; i < 7; i += 1) {
        const newCell = newRow.insertCell();
        newCell.classList.add("cell_empty");
      }
    }
    const changedCell =
      table.rows[table.rows.length - 1].cells[workDate.getDay()];
    changedCell.innerText = `${workDate.getDate()}`;
    changedCell.classList.remove("cell_empty");
    if (
      state &&
      state.Tasks.filter(
        (el) => new Date(el.date).getDate() === workDate.getDate()
      ).length > 0
    ) {
      changedCell.classList.add("cell_haveTask");
    } else {
      changedCell.classList.add("cell_date");
    }
    workDate.setDate(workDate.getDate() + 1);
  }

  document.querySelector(".calendarTable").innerHTML = table.innerHTML;
}
