import { EnhancedStore } from "@reduxjs/toolkit";

export function createID(task: Task, store: EnhancedStore): Task {
  let id = Math.round(Math.random() * 999 + 1);
  id =
    (store.getState() as Task[]).filter((el) => el.id === id).length > 0
      ? createID(task, store).id
      : id;

  const newTask = { ...task };
  newTask.id = id;
  return newTask;
}
