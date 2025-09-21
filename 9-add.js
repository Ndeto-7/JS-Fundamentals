function add(a, b) {
  if (a === undefined && b === undefined) {
    return "Missing both arguments";
  } else if (a === undefined) {
    return "Missing the first argument";
  } else if (b === undefined) {
    return "Missing the second argument";
  } else {
    return a + b;
  }
}

let a = 5;
let b = 6;

console.log(add(a, b));
