type User = {
  name: string;
  id: number;
};

type Admin = {
  userName: string;
  id: string;
};

// let saquib: User | Admin = { name: 2, id: 3334 };
let saquib: User | Admin = { userName: "saquib", id: "f" };
