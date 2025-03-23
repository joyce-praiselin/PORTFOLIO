let a = 10;
let b = 10;

a += 5;    a = 15
a -= 5;    a = 10
a *= 5;    a = 50
a /= 5;   a = 10
a %= 5;   a = 0

console.log(a == b);    false (a = 0, b = 10)
console.log(a === b);   false (a = 0, b = 10)