//condition.js

let isTrue = true;
let num1 = 5;
let num2 = 10;

isTrue = 3 < 5;
isTrue = num1 < 5;
isTrue = --num1 < 5;
isTrue = --num1 <= 4 && num2++ == 10;
isTrue = 0;     //js는 false --> falsy (0, "", null, undefide, NaN) false로 판별.
isTrue = ++num2 % 2;

console.log(num1, num2);

if (isTrue) {               //isTrue의 값이 참이면 if문 실행, 거짓이면 else실행.
    console.log('참');
} else{
    console.log('거짓');
}