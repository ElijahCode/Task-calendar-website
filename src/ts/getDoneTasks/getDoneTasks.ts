export function getDoneTasks(state: State): Task[] {
  const filteredStateByStatusDone = state.filter((el) => el.status === "done");
  return filteredStateByStatusDone;
}
