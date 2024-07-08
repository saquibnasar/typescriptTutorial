interface User {
  email: string;
  myFunction: () => void;
  //   nice way
  way2myFunction(): void;
}

// can update interface but not types
interface User {
  name: string;
}

// e
interface main extends User {
  id?: string;
}

const user: main = {
  email: "string",
  myFunction: () => {},
  way2myFunction: () => {},
  name: "saquib",
};
console.log(user);

export {};
