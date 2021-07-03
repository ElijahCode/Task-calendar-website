import { activateModalAddTask } from "../../handlers/modalWindow/activateModal";

export function addButtonTaskRender(): void {
  const appBlock = document.querySelector(".app");
  const button: HTMLButtonElement = document.createElement("button");

  const buttonBlock = document.createElement("div");
  buttonBlock.classList.add("buttonBlock");

  button.addEventListener("click", activateModalAddTask);
  button.classList.add("app_list_add_task_button");
  button.innerHTML =
    "<img src='https://image.flaticon.com/icons/png/512/1828/1828925.png'>";

  buttonBlock.append(button);

  appBlock.append(buttonBlock);
}
