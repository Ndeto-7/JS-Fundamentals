function add(x, y) {
  if (x === undefined && y === undefined) {
    return "Missing both arguments";
  } else if (x === undefined) {
    return "Missing the first argument";
  } else if (y === undefined) {
    return "Missing the second argument";
  } else {
    return x + y;
  }
}

let x = 5;
let y = 6;

console.log(add(x, y));
