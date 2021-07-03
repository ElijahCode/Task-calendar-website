import {
  activateModalChangeTask,
  activateModalDeleteTask,
} from "../../handlers/modalWindow/activateModal";

export function taskListRender(state: State): void {
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

  let list: HTMLDivElement;

  if (document.querySelector(".taskList")) {
    list = document.querySelector(".taskList");
    list.innerHTML = "";
  } else {
    list = document.createElement("div");
    list.classList.add("taskList");
  }

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

    const deleteButton = document.createElement("button");
    deleteButton.classList.add("button-delete-this-task");
    deleteButton.innerHTML =
      "<img src='https://image.flaticon.com/icons/png/512/4974/4974939.png'>";

    const supportBlock1 = document.createElement("div");
    supportBlock1.classList.add("app_list_supportBlock1");
    supportBlock1.append(taskDateHeader, taskDescription, taskStatus, taskTag);

    const supportBlock2 = document.createElement("div");
    supportBlock2.classList.add("app_list_supportBlock2");
    supportBlock2.append(deleteButton);

    taskItemBlock.append(supportBlock1, supportBlock2);
    list.append(taskItemBlock);
  });

  list.addEventListener("click", (event) => {
    if (
      !(
        (event.target as HTMLElement).matches("button") ||
        (event.target as HTMLElement).matches("img") ||
        (event.target as HTMLElement).matches(".taskList")
      )
    ) {
      activateModalChangeTask(event);
    }
  });
  list.addEventListener("click", (event) => {
    if (
      (event.target as HTMLElement).matches("button") ||
      (event.target as HTMLElement).matches("img")
    ) {
      activateModalDeleteTask(event);
    }
  });

  appBlock.append(list);
}
