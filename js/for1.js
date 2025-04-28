// for1.js
let sum = 0;

for (let i = 1; i <= 5; i++) {              //  (초기값; 조건; 증감식)
    sum = sum + i;
}
console.log("sum의 값은 " + sum);





// 1 ~ 20 반복 => 짝수인 경우 합을 구함.
let sum2 = 0;

for (let i = 1; i < 21; i++) {
    if (i % 2 == 0) {       //조건(짝수) 
        sum2 = sum2 + i;    //누적.
    }                                   // - end of 'if'
}                                       // -end of 'for'
console.log("1 ~ 20 의 짝수의 합은 " + sum2 + "입니다.");
