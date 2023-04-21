export class User {
  firstname: string;
  lastname: string;
  age: number;
  image: string;
  views: number;
  isAdmin: boolean;

  constructor(firstname: string, lastname: string, age: number, image: string, views: number, isAdmin: boolean) {
    this.firstname = firstname;
    this.lastname = lastname;
    this.age = age;
    this.image = image;
    this.views = views;
    this.isAdmin= isAdmin;
  }

}
