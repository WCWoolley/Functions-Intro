// // console.log(`working`);
// //
// // var num1 = 5;
// // var num2 = 3;
// // var result = num1 + num2;
//
// // console.log(result);
//
// // Named Function (Does get hoisted, read before execution)
//
// // function addNumbers() {
// //   var result = num1 + num2;
// //   console.log(result);
// // }
// //
// // addNumbers();
//
// // Unnamed / Anonymous Function (Does not get hoisted)
//
// // var addNumbers = function(){
// //   var result = num1 + num2;
// //   console.log(result);
// // }
// //
// // addNumbers();
//
//
// function addNumbers(num1,num2){
//   // console.log(num1 + num2);
//   var ex = num1 + 10;
//   return ex + num2;
// }
//
// addNumbers(5,6);
// addNumbers(500,65);
// addNumbers(500,'4');
// addNumbers('4','4');
//
// console.log(addNumbers(5,6) + addNumbers(500,65));

//Prototype (An extra tangent)

// Object.prototype.demo1 = function (num1,num2){
//   return num1 + num2;
// };
//
// var arr = [];
//
// console.log(arr.demo1(2,2));
