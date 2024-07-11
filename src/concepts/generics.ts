function indentityOne(val: boolean | number): boolean | number {
  return val;
}

function indentityTwo(val: any): any {
  return val;
}
function indentityThree<Type>(val: Type): Type {
  return val;
}
function indentityFour<T>(val: T): T {
  return val;
}

interface Bootled {
  brand: string;
  type: number;
}

indentityFour<Bootled>({ brand: "bisleri", type: 3 });
