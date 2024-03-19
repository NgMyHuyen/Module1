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
