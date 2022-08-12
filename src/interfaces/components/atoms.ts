export interface Discipline {
  id?: String | null;
  type?: String | null;
  subtitle?: any | null;
  name?: String | null;
  h_total?: String | null;
  h_weekly?: String | null;
  teacher?: String | null;
  description?: String | null;
  requirement?: String | null;
  required_for?: String | null;
}
export interface Semester {
  id?: String | null;
  name?: String | null;
  disciplines?:Array<Discipline> | null;
}
export interface Course {
  name?: String | null;
  semesters?:Array<Semester> | null;
}
