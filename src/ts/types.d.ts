declare interface Task extends Record<string, any> {
  date: string;
  description: string;
  status: "in work" | "done" | "waiting to get it in work";
  tag: "high priority" | "low priority" | "regular priority";
  id?: number;
}

declare type State = Task[];

declare interface Action extends Record<string, any> {
  type: string;
}

declare interface HTMLDivDateElement extends HTMLDivElement {
  date: string;
}
