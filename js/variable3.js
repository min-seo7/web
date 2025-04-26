// variable3.js
//연산자(+, -, /, *, %)
let num1 = document.querySelector('#num1').value;
let num2 = document.querySelector('#num2').value;
num1 = parseInt(num1); // 문자"30" -> 숫자 30       //parseInt로 문자에서 숫자타입으로 바꿈.
num2 = parseInt(num2); // 문자"17" -> 숫자 17
num1++;     // 31

// let result = num1 + num2;    // 문자타입은 "30" + "17" = "3017"  
let result = ++num1 + --num2;   //연산자위치: (좌)증/감소 후 연산, (우)연산 후 증/감소  
console.log(result, num1, num2);
//result 값을 input#result의 value속성에 대입.
document.querySelector('#result').value = result;