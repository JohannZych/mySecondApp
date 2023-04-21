export class Course {
  name: string;
  isNotForgotten: boolean;

  constructor(name: string, isNotForgotten: boolean) {
    this.name = name;
    this.isNotForgotten = isNotForgotten;
  }
}
