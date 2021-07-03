import { addButtonTaskRender } from "./addButtonTaskRender";

describe("addButtonTaskRender test", () => {
  const layout = document.createElement("div");
  layout.innerHTML = `<div class='app'></div>`;
  document.body.append(layout);
  addButtonTaskRender();

  it("Must contain button block", () => {
    expect(document.querySelector(".buttonBlock")).toBeTruthy();
  });
  it("Must contain button", () => {
    expect(document.querySelector(".app_list_add_task_button")).toBeTruthy();
  });
});
