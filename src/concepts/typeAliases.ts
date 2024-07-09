type myUser = {
  name: string;
  isPaid: boolean;
};
function makeUser(user: myUser): myUser {
  return {
    name: "test",
    isPaid: false,
  };
}

makeUser({ name: "test", isPaid: false });
