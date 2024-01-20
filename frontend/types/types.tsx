export interface Task {
  model: string;
  pk: string;
  fields: {
    name: string;
    date: string;
    description: string;
    state: string;
    priority: string;
    // Puedes agregar más campos según sea necesario
  };
}

export type TaskArray = Task[];
