export interface Discipline {
  id?: String | null;
  name?: String | null;
  h_total?: String | null;
  h_weekly?: String | null;
  docente?: String | null;
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
