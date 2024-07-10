// nice way to write code
class indexUser {
  readonly city: string = "delhi";
  world: string = "earth";
  email: string = "g@.com";
  _courseCout: number = 0;
  //   this can't be change out side of class or accessible
  private tryToChange: string =
    "can you change it outside of class and constructor";

  constructor(
    email: string,
    public name: string // private way: string
  ) {
    this.email = email;
    this.name = name;
  }

  // getter use to get the value normally use to get private value
  get getAppleEmail(): string {
    return `apple ${this.email}`;
  }

  // setter use to set value of anything  and normally use to set private value

  set setAppleEmail(courseNum: number) {
    if (courseNum <= 1) {
      throw new Error("course number can't be less then 1");
    }
    this._courseCout = courseNum;
  }
}
// bad way to write code

// class indexUser {
//   name: string;
//   email: string;
//   readonly city: string = "delhi";
//   world: string = "earth";
//   //   this can't be change out side of class or accessible
//   private tryToChange: string =
//     "can you change it outside of class and constructor";

//   constructor(email: string, name: string) {
//     this.email = email;
//     this.name = name;
//   }
// }

const user = new indexUser("@gmail.com", "hello name");
user.world = "my earth";
//   this can't be change out side of class or accessible
// user.cannotChnageOutSide = "earth";
// end
