interface Circle {
  kind: "circle";
  radius: 7;
}
interface Square {
  kind: "square";
  side: 2;
}

type myshape = Square | Circle;

function getArea(shape: myshape) {
  switch (shape.kind) {
    case "circle":
      return Math.PI * shape.radius ** 2;
    case "square":
      return shape.side * shape.side;
    default:
      const _exhaustiveCheck: never = shape;
      return _exhaustiveCheck;
  }
}
