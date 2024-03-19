let username = "huyen";
let password = "text";
const lengthUsername = username.length;
const lengthPassword = password.length;

if (
  lengthUsername >= 6 &&
  lengthPassword >= 8 &&
  password == password.toUpperCase
) {
  console.log("Dang nhap thanh cong");
} else {
  console.log("Dang nhap that bai");
}

// BAI TINH TRUNG BINH MON HOC
const math = parseInt(prompt("enter number"));
const physics = parseInt(prompt("enter number"));
const chemistry = parseInt(prompt("enter number"));
const Average = (math + physics + chemistry) / 3;

if (8 <= Average && Average <= 10) console.log("GIỎI");
else if (6.5 <= Average && Average <= 7.9) {
  console.log("KHÁ");
} else if (5.0 <= Average && Average <= 6.4) {
  console.log(" TRUNG BÌNH");
} else {
  console.log("YẾU");
}

// CHO 1 SO NGUYEN
const x = parseInt(prompt("enter a number"));
if (x > 0) console.log("So nguyen duong");
else if (x == 0) {
  console.log("So nay bang 0");
} else {
  console.log("So nguyen am");
}

//
const age = parseInt(prompt("nhập tuổi"));
if (age >= 18) console.log("Bạn đã đủ tuổi");
else console.log("Bạn chưa đủ tuổi");

//
const h = parseInt(prompt("Input time"));
if (h < 18) console.log("good day");
else {
  console.log("Good evening");
}

//
let number = parseInt(prompt(`nhap so`));
let n = number % 2;
console.log(n);
switch (n) {
  case 0:
    console.log(`so chan`);
    break;
  case 1:
    console.log(`so le`);
    break;
  default:
    console.log(`khong phai chu so`);
    break;
}

//
const color = prompt("Nhập màu");
switch (color) {
  case "xanh":
  case "đỏ":
  case "vàng":
    console.log(`Màu bạn nhập là ${color}`);
    break;
  default:
    console.log("Màu không hợp lệ");
}

//
