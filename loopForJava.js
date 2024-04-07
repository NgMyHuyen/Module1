// let sum = 0;
// const n = parseInt(prompt("Tong cua cac so nguyen"));
// for (let i = n; i > 0; i = Math.floor(i / 10)) {
//   sum += i % 10;
// }
// console.log(sum);

//
// const n = parseInt(prompt("Nhap so nguyen"));
// sum = "";
// for (let i = n; i > 0; i = Math.floor((i /= 10))) {
//   sum += (i % 10).toString();
// }
// console.log(sum);

// // //
// const n = parseInt(prompt("nhap so nguyen"));
// for (let i = n; i <= 100; i++) {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// }

// //
// let a = parseInt(prompt("nhap 1 so"));
// let b = parseInt(prompt("nhap 1 so"));
// for (let i = a; i <= b; i++) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(i);
//   }
// }

// //
// let sum = 1;
// for (let i = 1; i <= g; i++) {
//   sum += i;
// }

// //
// const a = parseInt(prompt("a"));
// const b = parseInt(prompt("b"));
// c = 1;
// for (let i = 1; i <= b; i++) {
//   c = c * a;
// }
// console.log(c);

// Tinh uoc
// let count = 0;
// const n = parseInt(prompt("Nhap so "));
// for (let i = 1; i <= n; i++) {
//   if (n % i === 0) {
//     console.log(i);
//     count++;
//   }
// }
// console.log(`So uoc la ${count}`);

// TINH TONG CAC SO TU 1 DEN N
// let sum = 0;
// const n = parseInt(prompt("nhap so"));
// for (let i = 1; i <= n; i++) {
//   sum = sum + i;
// }
// console.log(sum);

// TINH GIAI THUA CUA 1 SO
// let multiply = 1;
// const n = parseInt(prompt("nhap so"));
// for (let i = 1; i >= 1; i--) {
//   multiply *= i;
// }
// console.log(multiply);

// TINH TONG SO LE
// const n = parseInt(prompt("Nhập n: "));
// let sum = 0;
// for (let i = 1; i <= n; i += 2) {
//   sum += i;
// }
// console.log(sum);

// Đếm số chữ số trong một số
// const n = parseInt(prompt("Nhap so nguyen"));
// sum = "";
// for (let i = n; i > 0; i = Math.floor((i /= 10))) {
//   sum += (i % 10).toString();
// }
// console.log(sum.length);

// Xác định chữ số lớn nhất
// let d = parseInt(prompt("So d"));
// let max = 0;
// for (i = d; i > 0; i = Math.floor((i /= 10))) {
//   if (max < i % 10) max = i % 10;
// }

// console.log(`so lon nhat trong so da cho la: ${max}`);

// Tính tổng bình phương tự nhiên liên tiếp
// let sum = 0;
// const x = parseInt(prompt("nhap so"));
// for (let i = 0; i <= x; i++) {
//   sum += i * i;
// }
// console.log(sum);

// Nhập số N và Tính tổng chữ số của số N
// let sum = 0;
// let n = parseInt(prompt("So n"));
// for (let i = n; i > 0; i = Math.floor((i /= 10))) {
//   sum += i % 10;
// }
// console.log(sum);

// Lệnh while : nhập số nguyên n , in ra giai thừa của số
// const n = parseInt(prompt("nhap so nguyen"));
// let multiply = 1;
// let i = 1;
// while (i <= n) {
//   multiply *= i;
//   i++;
// }
// console.log(multiply);

// for (let i=1 ; i=100 ; i++) {
//   if (i % 3 ===0 ) console.log ('Fizz');
//   else if (i %5===0) {console.log('Buzz')};
// else if (i % 3 ===0 && i %5===0) {console.log('FizzBuzz')}
// }

// Thực hành lệnh while : cho 1 đến 100, đặt Fizz cho số chia hết cho 3 & Buzz chia hết cho 5; FizzBuzz cho số chia hết 3 va 5
// let i = 1;
// while (i <= 100) {
//   if (i % 3 === 0 && i % 5 === 0) {
//     console.log(`${i} FizzBuzz`);
//   } else if (i % 5 === 0) {
//     console.log(`${i} Buzz`);
//   } else if (i % 3 === 0) console.log(`${i}Fizz`);
//   i++;
// }

// Tổng 30 số đầu tiên chia hết cho 5
// let i = 0;
// let count = 0;
// let sum = 0;
// while (count <= 30) {
//   if (i % 5 === 0) {
//     sum += i;
//     count++;
//   }
//   i++;
// }
// console.log(sum);

// Cho 1 so n, tinh uoc cua n bang lenh while
// let i = 1;
// const n = parseInt(prompt("Nhap so "));
// while (i <= n) {
//   if (n % i === 0) console.log(i);
//   i++;
// }

// Viết 1 ứng dụng để in ra màn hình console 1 bảng cửu chương

// let i = 1;
// const n = parseInt(prompt("Bang cuu chuong cua ${n}"));
// let a = null;

// while (i <= 10) {
//   a = n * i;
//   console.log(`${n} * ${i} = ${a}`);
//   i++;
// }

// Game đoán số
// let count = 1;
// let x = 8;
// while (count < 3) {
//   const n = prompt(`input number from 1 to 10: `);
//   if (n == x) {
//     alert(`Correct`);
//   }
//   if (n < x) {
//     alert(`so nho hon`);
//   }
//   if (n > x) {
//     alert(`so lon hon`);
//   }
//   count++;
// }
// if (count == 3) {
//   alert("you lose!");
// }

// sum = "";
// for (let i = 2000; i <= 3200; i++) {
//   if (i % 7 == 0 && i % 5 !== 0) sum += i + " , ";
// }
// console.log(sum);

// let sum = "";
// let i = 2000;
// while (i <= 3200) {
//   if (i % 7 == 0 && i % 5 !== 0) sum += i + " , ";
//   i++;
// }
// console.log(sum);

// const a = parseInt(prompt("nhap so a"));
// const b = parseInt(prompt("nhap so b"));
// let count = 0;
// for (let i = a; i <= b; i++) {
//   if (i % 2 !== 0 && i % 5 !== 0 && i % 7 !== 0) {
//     console.log(i);
//     count++;
//   }
// }
// console.log(count);

// const a = parseInt(prompt("nhap so a"));
// const b = parseInt(prompt("nhap so b"));
// let count = 0;
// for (let i = a; i <= b; i++) {
//   if (i % 2 !== 0 && i % 5 !== 0 && i % 7 !== 0) continue;
//   {
//     console.log(i);
//     count++;
//   }
// }
// console.log(count);

// nhập n từ bàn phím , n>0, in ra giá trị tổng bình phương của tất cả các số lẻ nhỏ hơn hoặc bằng n
// Dùng while/for và continue
// const n = parseInt(prompt("nhap so n"));
// sum = 0;
// for (i = 1; i <= n; i++) {
//   if (i % 2 === 0) {
//     continue;
//   }
//   sum += i * i;
// }
// console.log(sum);

// const n = parseInt(prompt("nhap so n"));
// let sum = 0;
// i = 1;
// while (i <= n) {
//   if (i % 2 !== 0) sum += i * i;
//   i++;
// }
// console.log(sum);

// Nhập 1 số & check có phải số nguyên tố k
// const x = parseInt(prompt("nhap so"));
// isPrime = true;
for (i = 2; i <= Math.sqrt(mx); i++) {
//   if (x % i == 0) isPrime = False;
// }
// if (isPrime) console.log(`${x} la so nguyen to`);
// else console.log(`${x} k phai so nguyen to`);

// ứng dụng tính chu vi và diện tích theo từng loại hình dựa trên menu chức năng
// Bước 1: Khai báo biến choice để ghi nhớ lựa chọn của người dùng.
// Bước 2: Sử dụng vòng lặp while để hiển thị menu như yêu cầu và cho phép người dùng nhập lựa chọn của họ.
// Bước 3: Sử dụng cấu trúc điều kiện switch … case để xét giá trị người dùng nhập vào và điều hướng đến chức năng tương
// ứng . Nếu người dùng nhập không hợp lệ thì thông báo nhập sai và yêu cầu nhập lại.
// let choice;
// let isCheck = true;
// while (isCheck) {
//   choice = parseInt(
//     prompt(`chọn công thức bạn muốn tính
//     1. Chu vi hình chữ nhật .
//     2. Diện tích hình chữ nhật .
//     3. Chu vi tam giác.
//     4. Diện tích hình tam giác.
//     5. Chu vi hình tròn.
//     6. Diện tích hình tròn.
//     7. Thoát`)
//   );
//   switch (choice) {
//     case 1:
//       const a = parseInt(prompt("Chieu dai"));
//       const b = parseInt(prompt("Chieu rong"));
//       let cchunhat = (a + b) * 2;
//       alert(`Chu vi hình chữ nhật ${cchunhat}`);
//       break;
//     case 2:
//       const c = parseInt(prompt("Chieu dai"));
//       const d = parseInt(prompt("Chieu rong"));
//       let schunhat = c * d;
//       alert(`Diện tích hình chữ nhật ${schunhat}`);
//       break;
//     case 3:
//       const e = parseInt(prompt("Canh a"));
//       const f = parseInt(prompt("Canh b"));
//       const g = parseInt(prompt("Canh c"));
//       let ctamgiac = e + f + g;
//       alert(`Chu vi hình tam giac ${ctamgiac}`);
//       break;
//     case 4:
//       const h = parseInt(prompt("Chiều cao"));
//       const i = parseInt(prompt("Cạnh đáy"));
//       let stamgiac = (h * i) / 2;
//       alert(`Dien tich hình tam giac ${stamgiac}`);
//       break;
//     case 5:
//       const k = parseInt(prompt("Đường kính"));
//       let chinhtron = k * 3.14;
//       alert(`Chu vi hình tròn ${chinhtron}`);
//       break;
//     case 6:
//       const l = parseInt(prompt("Bán kính"));
//       let shinhtron = l * l * 3.14;
//       alert(`Diện tích hình tròn ${shinhtron}`);
//       break;
//     case 7:
//       isCheck = false;
//       break;
//     default:
//       console.log("Nhập sai, vui lòng nhập lại");
//       break;
//   }
// }

// const a = parseInt(prompt("nhap so"));
// const b = parseInt(prompt("nhap so"));
// let multiply = 1;
// for (let i = 1; i <= b; i++) {
//   multiply *= a;
// }
// console.log(multiply);

MẢNG - ARRAY;

// Cho dãy arr & đặt const x, hiện x nếu x bằng chỉ số của số trong dãy arr , else hiện ra -1.

// let arr = [2, 4, 5, 7, 8];
// let position = 1;
// let x = parseInt(prompt("nhap so"));
// let isCheck = false;
// for (i = 0; i < arr.length; i++) {
//   if (x === arr[i]) {
//     position = 1;
//   }
// }
// console.log(position);

//  Tính tổng các phần tử trong mảng:
// sum = 0;
// let num = [
//   (a = parseInt(prompt("nhap so"))),
//   (b = parseInt(prompt("nhap so"))),
//   (c = parseInt(prompt("nhap so"))),
// ];
// let sum = num.reduce((sum, element) => sum + element);
// console.log(sum);

// let num = [1,2,3,4,5];
// let sum = n,um.reduce((sum, element) => sum + element);
// console.log(sum);

// Tìm phần tử lớn nhất và nhỏ nhất trong mảng
// let arr = [53, 4558 , 4120 , -2165 , 2528];
// min = arr[0];
// max = arr[0];
// for (i = 1 ; i <arr.length; i++) {
//   if(arr[i] < min) {min= arr[i]};
//   if (arr[i] > max) {max=arr[i]}
// } console.log(min)
// console.log(max)

// Tìm phần tử lớn nhất
// let arr = [5, 4, 3, 3, 6];
// arr.sort((a, b) => b - a);
// max = arr[0];
// console.log(max);

// Tìm phần tử lớn thu 2
// let array = [1, 4, 2, 5, 9,8,8,4];
// let numbers= array.sort((a, b) => b - a);
// for (i = 0; i < numbers.length; i++) {
//   if(numbers[0]>numbers[i])
//   {console.log(`so lon thu 2: ${numbers[i]}`);
//   break;}
// }

// Sắp xếp mảng theo thứ tự tăng dần.
// let arr = [1, 3, 5, 9, 8];
// for (let i = 0; i < arr.length; i++) {
//   for (let k = i + 1; k < arr.length; i++) {
//     if (arr[i] > arr[k]);
//     let temp = arr[i];
//     arr[i] = arr[k];
//     temp = arr[k];
//   }
// }
// console.log(arr);

// Đảo ngược các phần tử trong mảng;
// const arr = [-3, 5, 1, 3, 2, 10];
// for (i = arr.length - 1; i >= 0; i--)
//  console.log(arr[i]);

// // In mảng theo thứ tự nghịch đảo:
// const arr = [-3,5,1,3,2,10];
// arr.sort((a, b) => b - a);
// console.log(arr);

// Tìm giá trị trong mảng
// let arr = [-3, 5, 1, 3, 2, 10];
// let x = parseInt(prompt("nhap so"));
// for (i = 0; i < arr.length; i++) {
//   if (x == arr[i]) alert("x" + arr[i] + "found at " + i);
// }

// Thực hành 3 - ses 13
// let array = [];
// for (i = 0; i < 11; i++) {
//   arr.push(i).splice(1, 2);
// }
// console.log("Sử dụng phương thức push()", array);
// console.log("Sử dụng phương thức splice()", array);

// Thực hành 4-ses 13
// let arr = [1, 2, 3, 4, 5, 6];
// const n = parseInt(prompt("nhap so bat ki"));
// let check = false;
// for (i = 0; i < arr.length; i++) {
//   if (n == arr[i]) check = true;
// }
// if (check) alert("Bingo");
// else alert("Chúc bạn may mắn lần sau");

// Thực hành 6 - ses 13
// let max = arr[0];
// let arr = [8, 9, 4, 1, 5];
// for (i = 0; i < arr.length; i++) {
//   if (max < arr[i]) max = arr[i];
// }
// console.log(max);

// 7.Bài tập - ses 13
// bai 1
// let myColor = ["Lion", "Tiger", "Wolf", "Kangaroo"];
// let result = myColor.join();

// bai2
// let string = '246546';
// let str = string.split('');
// let issue= [];
// for (i=0; i<str.length; i++) {
//   if (str[i] %2 == 0 && str[i - 1] % 2 === 0)
//   {issue.push('-',str[i])
//   }else {issue.push(str[i]);}
// } console.log(issue.join (''))

// 9. Bài tập - ses 13
// const arr= ["Go to bed at 11pm", "Do homework at 8pm"];
// let choice = prompt("");

// switch (choice) {
//   case "C":
//     arr.push("New todo");
//     for (i = 0; i < arr.length; i++) {
//       console.log(i + 1, arr[i]);
//     }
//     break;

//   case "R":
//     for (i = 0; i < arr.length; i++) {
//       console.log(arr[i]);
//     }
//     break;

//   case "U":
//     let n = parseInt(prompt("input update element's position(choose 0 or 1):"));
//     let a = prompt("input a:");
//     arr.splice(n, 0, a);
//     for (let i = 0; i < arr.length; i++) {
//       console.log(arr[i]);
//     }
//     break;

//   case "D":
//     let b = parseInt(prompt("input delete element's position:"));
//     arr.splice(b, 1, 0);
//     for (i = 0; i < arr.length; i++) {
//       console.log(arr[i]);
//     }
//     break;

//   default:
//     console.log("Nhap sai, nhap lai");
//     break;
// }

// Bài tập Session 14 Luyện tập mảng 1

// Bài tập 1
// let b = prompt("Nhap 10 so nguyen va cach nhau bang dau phay");
// let array = b.split(",");
// console.log(arr);
// for (i = 0; i < arr.length; i++) {
//   if (arr[i] > 10 || arr[i] == 10) console.log(arr[i]);
// }

// Bài tập 3
// let arr=[1,2,3,4,5,6,7,8,9,10];
//  let max=arr[0];
//  let sum=0;
//  let average=0;

//  for(let i=0; i<arr.length; i++){
//   if(arr[i]>max) {
//    max= arr[i];}
// sum +=arr[i];

//  }
//  average = sum / arr.length;
//  console.log(`the max number is: ${max}`);
//  console.log(`${average} is average`);

// Bài tập 2
// let arr = [-3, 5, 1, 3, 2, 10];
// let x = parseInt(prompt("chon 1 trong cac so -3, 5, 1, 3, 2, 10 "));
// let max = 0 ;
// for (i = 0; i < arr.length; i++) {
//   if (x == arr[i]) alert(arr[i] + " found at " + i + " position");
// if (max < arr[i]) {max = arr[i]}}
// console.log(arr[i]);

