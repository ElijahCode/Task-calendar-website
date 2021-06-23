import { activateModalAddTask } from "../../handlers/modalWindow/activateModal";

export function addButtonTaskRender(): void {
  const appBlock = document.querySelector(".app");
  const button: HTMLButtonElement = document.createElement("button");

  button.addEventListener("click", activateModalAddTask);
  button.innerHTML = "Add task";

  appBlock.append(button);
}
