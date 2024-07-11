class protectedClass {
  private name = "saquib";
  protected protectedName = "saquib";

  constructor() {}
}

class user extends protectedClass {
  changeuserName() {
    // private varibele can't be use out of it class
    // this.name = "heelo";
    // proteced varibele can be use in extend class but not anywhere else
    this.protectedName = "hello";
  }
}

export {};
