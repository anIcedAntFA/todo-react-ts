export interface ITodoItem {
  id: number;
  name: string;
  category: string;
  priority: string;
  completed: boolean;
}

export interface ICategory {
  title: string;
  color: string;
}

export interface IPriorityColor {
  High: string;
  Medium: string;
  Low: string;
}
