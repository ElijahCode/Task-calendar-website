import { aboutRender } from "./aboutRender";

describe("aboutRender testing", () => {
  document.body.innerHTML = `<div class="app"></div>`;
  aboutRender();
  const aboutBlock = document.querySelector(".aboutBlock");
  it("Must contain aboutBlock", () => {
    expect(aboutBlock).toBeTruthy();
  });
  it("Must contain about author paragraph", () => {
    expect(aboutBlock.querySelector(".parag_aboutAuthor")).toBeTruthy();
  });
  it("Must contain about project paragraph", () => {
    expect(aboutBlock.querySelector(".parag_aboutProject")).toBeTruthy();
  });
  it("Must contain about calendar paragraph", () => {
    expect(aboutBlock.querySelector(".parag_aboutCalendar")).toBeTruthy();
  });
});
