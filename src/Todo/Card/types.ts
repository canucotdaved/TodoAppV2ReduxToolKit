export interface IPropTypes {
  id: string;
  title: string;
  description: string;
  Delete: () => void;
  complete: () => void;
  completed: boolean;
  date: string;
}
