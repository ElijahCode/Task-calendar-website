declare interface Task {
  [key: string]: any;
  date: string;
  description: string;
  status: "in work" | "done" | "waiting to get it in work";
  tag: "high priority" | "low priority" | "regular priority";
  id?: number;
}

declare interface State {
  calendarMenuDate: number;
  Tasks: Task[];
}
