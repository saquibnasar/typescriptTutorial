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

// you have anytype
const data: (string | number)[] = [21, "3"];

// all element has to be type you pass
const data1: string[] | number[] = [21, 2];

// this wrong way of doing it
// const data3: string[] | number[] = [21, "2"];

// you can put direct value to varibale that can't be change
let pi: 3.14 = 3.14;
