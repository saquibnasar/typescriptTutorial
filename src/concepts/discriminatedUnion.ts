interface Circle {
  kind: "circle";
  radius: 7;
}
interface Square {
  kind: "square";
  side: 2;
}

type shape = Square | Circle;

function getTrueShpae(shape: shape): number {
  if (shape.kind === "circle") {
    return Math.PI * shape.radius ** 2;
  } else {
    return shape.side * shape.side;
  }
}
