const User = {
  name: "saquib",
  email: "saquib@gm",
  isActive: false,
};

function createUser({ name: string, isPaid: boolean }) {}

createUser({ name: "test", isPaid: false });

// return object function

function makeUser({ name: string, isPaid: boolean }): {
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
