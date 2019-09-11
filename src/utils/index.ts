export interface IStudent {
  id: string;
  name: string;
}

export interface IColumn {
  id: string;
  title: string;
  studentsIds: string[];
}
