import { activateModalChangeTask } from "../handlers/modalWindow/activateModal";

export function listRender(state: State): void {
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
  const appBlock = document.querySelector(".app");
  const list = document.createElement("div");
  list.classList.add("taskList");
  state.forEach((el) => {
    const [year, month, day] = el.date
      .match(/([0-9]{4}-[0-9]{1,2}-[0-9]{1,2})/)[0]
      .split("-");
    const time = el.date.match(/([0-9]{2}:[0-9]{2})/)
      ? el.date.match(/([0-9]{2}:[0-9]{2})/)[0]
      : "00:00";

    const taskItemBlock = document.createElement("div");
    taskItemBlock.classList.add("taskItem");
    taskItemBlock.id = el.id.toString();

    const taskDateHeader = document.createElement("p");
    taskDateHeader.classList.add("taskDateHeader");
    taskDateHeader.innerHTML = `${day} ${
      months[Number(month) - 1]
    } ${year} ${time}`;

    const taskDescription = document.createElement("p");
    taskDescription.classList.add("taskDescription");
    taskDescription.innerHTML = `Description: ${el.description}`;

    const taskStatus = document.createElement("p");
    taskStatus.classList.add("taskStatus");
    taskStatus.innerHTML = `Status: ${el.status}`;

    const taskTag = document.createElement("p");
    taskTag.classList.add("taskTag");
    taskTag.innerHTML = `Tag: ${el.tag}`;

    taskItemBlock.append(taskDateHeader, taskDescription, taskStatus, taskTag);
    list.append(taskItemBlock);
  });

  list.addEventListener("click", activateModalChangeTask, true);

  appBlock.innerHTML = "";
  appBlock.append(list);
}
