import { activateModalAddTask } from "../../handlers/modalWindow/activateModal";

export function addButtonTaskRender(): void {
  const appBlock = document.querySelector(".app");
  const button: HTMLButtonElement = document.createElement("button");

  button.addEventListener("click", activateModalAddTask);
  button.classList.add("app_list_add_task_button");
  button.innerHTML = "Add task";

  appBlock.append(button);
}
