// let num = [1, 2];
// let num2 = [3, 4, 5];

// function arrSum(arrNum) {
//   let sum = 0;
//   for (let i = 0; i < arrNum.length; i++) {
//     sum += arrNum[i];
//   }
// }
// console.log("sum");

// bt1 of LT2 of s16
// function square() {
//   let a = parseInt(prompt("input number: "));
//   return a * a;
// }
// // let c = square();
// console.log("Binh phuong cua so da nhap la:", square());

/*bt2 of LT2 of s16
function cCircle() {
  let r = parseInt(prompt("Ban kinh hinh tron: "));
return 2 * r * 3.14;

}
console.log(cCircle);
function sCircle() {
    let r = parseInt(prompt("Ban kinh hinh tron: "));
  return r * r * 3.14;

  }
  console.log(sCircle);
  */

// bt4 of LT2 of s16
// function check() {
//   let n = parseInt(prompt("nhap so hoac chu:"));
//   let result = "";
//   let num = true;

//   if ((result = n.toLocaleString)) num = false;
//   else console.log("False");
//   return result;
// }
// let input = prompt("Nhập vào số hoặc chuỗi: ");
// let number;

// if (!isNaN(input)) number = parseInt(input);
// else number = input;

// function checkNumber(number) {
//   if (typeof number === "number") return true;
//   return false;
// }
// console.log(checkNumber(number));

/*bt3 LT2 s16
let number = parseInt(prompt("input num:"));
function factorial(number) {
  let factorial = 1;
  for (i = number; i > 0; i--) {
    factorial *= i;
  }
  return factorial;
}
console.log(factorial(number));*/

/*bt5 LT2 s16
let num1 = parseInt(prompt("nhap so thu I:"));
let num2 = parseInt(prompt("nhap so thu II:"));
let num3 = parseInt(prompt("nhap so thu III:"));
function compare(){
    let minNum=num1;
    if (num1>num2) minNum=num2
    else if(num2>num3) minNum=num3;
    return minNum
} console.log(compare())*/

/* bt6 LT2 s16
let num=parseInt(prompt("input number: "));
function check(num){
 if(num>0) return true;
 return false;
} if (check(num)) console.log("True")
else {console.log("False")}*/

/* bt7 LT2 s16
let a=parseInt(prompt("input number a: "));
let b=parseInt(prompt("input number b: "));
let arr=[a,b];
function reversed(a,b){
return arr.reverse()
} console.log(reversed(a,b))*/

// Bt9
// let a = prompt(" ");
// let arr = a.split(",");
// for (i = arr.length - 1; i >= 0; i--) {
//   let array = [];
//   array.push(arr[i]);
// }
// function countDisplay() {
//   let n = parseInt(prompt("Nhap vao ky tu muon kiem tra: "));
//   let count = 0;
//   for (i = 0; i < arr.length; i++) {
//     if (n == arr[i]) count++;
//   }
//   if (count === 0) {
//     console.log(-1);
//   }
//   return count;
// }
// if (countDisplay()) console.log(countDisplay());

// BT6 nhập vào chuỗi số bất kì, viết hàm sắp xếp chuỗi số đó từ bé đến lớn
// let a = prompt("nhap chuoi so cach nhau bang dau phay");
// let arr = a.split (",");
// for (i=0; i <arr.length;i++) {
//   let array = [];
//   array.push(arr[i]);
// }
// function compare() {

//   // console.log (arr);
//   let c = arr.sort((a,b) => a-b);
//   return c;

// }console.log (compare())

// BT7 hàm  kiểm tra  năm người dùng nhậpcó phải năm nhuận không
// let n = parseInt(prompt('nhap so nam'));
// if (n % 4=== 0) true ;
// function year (){
//   if (n % 4=== 0)
//   return true;
// return false
// }if (year())
// console.log("Day la nam nhuan")
//  else console.log("Day la nam k nhuan");

// OBJECT
let doList = [
  {
    id: 2,
    title: "Mua đồ",
    des: "bàn chải",
    position: false,
  },
  { id: 1, title: "Đi học", des: "đi trước 7 rưỡi", position: true },
];
console.log("Việc cần làm", doList);

function checkPosition() {
  for (let i in doList) {
    if (doList[i].position) {
      console.log("Viec" + doList[i].title + "Completed");
    } else {
      console.log("Viec" + doList[i].title + "Non Completed");
    }
  }
}
checkPosition();

function addDo() {}
