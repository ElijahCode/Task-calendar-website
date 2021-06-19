export function aboutRender(): void {
  const appBlock = document.querySelector(".app");

  const contentBlock = document.createElement("div");
  contentBlock.classList.add("aboutBlock");

  const aboutAuthor = document.createElement("p");
  aboutAuthor.classList.add("parag_aboutAuthor");
  aboutAuthor.innerHTML = "Author: Ilya Starikov";

  const aboutProject = document.createElement("p");
  aboutProject.classList.add("parag_aboutProject");
  aboutProject.innerHTML =
    "Project: It's website that let you create your own task list on every day. You can update, read and delete created tasks.";

  const aboutCalendar = document.createElement("p");
  aboutCalendar.classList.add("parag_aboutCalendar");
  aboutCalendar.innerHTML = `Calendar: It support work with task list.`;

  contentBlock.append(aboutAuthor, aboutProject, aboutCalendar);

  appBlock.innerHTML = contentBlock.innerHTML;
}
