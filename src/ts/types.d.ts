interface Task {
  date: string;
  description: string;
  status: "in work" | "done" | "waiting to get it in work";
  tag: "high priority" | "low priority" | "regular priority";
  id?: number;
}

type State = Task[];

interface Action {
  type: string;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  payload: any;
}

interface HTMLDivDateElement extends HTMLDivElement {
  date: string;
}
