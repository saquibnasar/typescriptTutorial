"use strict";
// nice way to write code
class indexUser {
    constructor(email, name // private way: string
    ) {
        this.email = email;
        this.name = name;
        this.city = "delhi";
        this.world = "earth";
        //   this can't be change out side of class or accessible
        this.tryToChange = "can you change it outside of class and constructor";
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
