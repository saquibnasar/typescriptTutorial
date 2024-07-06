type User = {
  // readonly where you can just read but can't pass anything or change it
  readonly _id: string;
  name: string;
  email: string;
  isActive: boolean;
  //  optional where you don't have to pust it
  credcardDetails?: number;
};
let myUser: User = {
  _id: "1",
  name: "h",
  email: "h@com",
  isActive: false,
};
