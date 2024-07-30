import { Task } from "./Task";


export interface Course {
    id: number;
    title: string;
    description: string;
    price: number;
    tasks: Task[];
  }