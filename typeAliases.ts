type User = {
  name: string;
  isPaid: boolean;
};
function makeUser(user: User): User {
  return {
    name: "test",
    isPaid: false,
  };
}

makeUser({ name: "test", isPaid: false });
