// function

function sum(n1: number, n2: number): number | string {
  if (n1 > 4) {
    return "noice";
  }
  return n1 + n2;
}

sum(3, 7);

// function user

const user = (name: string, number: number, male: boolean = true) => {};

user("saquib", 9);
user("rina", 9, false);

const heros = ["thor", "magineto", "storm"];

heros.map((hero): string => {
  return `My hero name is ${hero}`;
});

function consoleError(errorMsg: string): void {
  console.log(errorMsg);
}

function handleError(errorMsg: string): never {
  console.log(errorMsg);
  throw new Error(errorMsg);
}

export {};
