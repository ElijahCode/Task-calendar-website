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
    deleteButton.innerText = "Delete Task";

    taskItemBlock.append(
      taskDateHeader,
      taskDescription,
      taskStatus,
      taskTag,
      deleteButton
    );
    list.append(taskItemBlock);
  });

  list.addEventListener("click", (event) => {
    if (!(event.target as HTMLElement).matches("button")) {
      activateModalChangeTask(event);
    }
  });
  list.addEventListener("click", (event) => {
    if ((event.target as HTMLElement).matches("button")) {
      activateModalDeleteTask(event);
    }
  });

  appBlock.append(list);
}
