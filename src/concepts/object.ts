interface User {
  name: string;
  isPaid: boolean;
  email?: string;
}
const User = {
  name: "saquib",
  email: "saquib@gm",
  isActive: false,
};

function createUser(user: User) {}

createUser({ name: "test", isPaid: false });

// return object function

function makeUser(user: User): {
  name: string;
  ispaid: boolean;
} {
  return {
    name: "test",
    ispaid: false,
  };
}

// that is error
makeUser({ name: "test", isPaid: false, email: "testEmail" });

// something that should not work works

// no error
let test = { name: "test", isPaid: false, email: "testEmail" };

makeUser(test);

export {};
