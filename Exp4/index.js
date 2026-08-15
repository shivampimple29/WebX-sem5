let a = 0;
let b = 1;

console.log("Fibonacci Series:");

for (let i = 1; i <= 10; i++) {
  console.log(a);

  let c = a + b;
  a = b;
  b = c;
}
