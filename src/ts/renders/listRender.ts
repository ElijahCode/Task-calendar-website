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

  const list = document.querySelector(".taskList");
  list.innerHTML = "";

  state.Tasks.forEach((el) => {
    const elDate = new Date(el.date);
    const taskItemBlock = document.createElement("div");
    taskItemBlock.classList.add("taskItem");

    const taskDateHeader = document.createElement("p");
    taskDateHeader.classList.add("taskDateHeader");
    taskDateHeader.innerHTML = `${elDate.getDate()} ${
      months[elDate.getMonth()]
    } ${elDate.getFullYear()} ${elDate.getHours()}:${elDate.getMinutes()}`;

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
}
