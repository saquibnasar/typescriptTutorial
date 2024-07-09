// nice way to write code
class indexUser {
  readonly city: string = "delhi";
  world: string = "earth";

  //   this can't be change out side of class or accessible
  private tryToChange: string =
    "can you change it outside of class and constructor";

  constructor(
    public email: string,
    public name: string // private way: string
  ) {
    this.email = email;
    this.name = name;
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
