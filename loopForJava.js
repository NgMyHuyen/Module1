let sum = 0;
const n = parseInt(prompt("Tong cua cac so nguyen"));
for (let i = n; i > 0; i = Math.floor(i / 10)) {
  sum += i % 10;
}
console.log(sum);

//
const n = parseInt(prompt("Nhap so nguyen"));
sum = "";
for (let i = n; i > 0; i = Math.floor((i /= 10))) {
  sum += (i % 10).toString();
}
console.log(sum);

//
const n = parseInt(prompt("nhap so nguyen"));
for (let i = n; i <= 100; i++) {
  if (i % 2 === 0) {
    console.log(i);
  }
}

//
let a = parseInt(prompt("nhap 1 so"));
let b = parseInt(prompt("nhap 1 so"));
for (let i = a; i <= b; i++) {
  if (i % 3 === 0 && i % 5 === 0) {
    console.log(i);
  }
}

//
let sum = 1;
for (let i = 1; i <= g; i++) {
  sum += i;
}

//
const a = parseInt(prompt("a"));
const b = parseInt(prompt("b"));
c = 1;
for (let i = 1; i <= b; i++) {
  c = c * a;
}
console.log(c);

//
let count = 0;
const n = parseInt(prompt("Nhap so "));
for (let i = 1; i <= n; i++) {
  if (n % i === 0) {
    console.log(i);
    count++;
  }
}
console.log(`So boi la ${count}`);
