//condition4exe.js
// 1 ~ 10 임의의 값을 생성하고, 
// 생성된 값을 변수에 저장한 후 2의 배수 또는 3의 배수 2, 3의 배수가 아님. 

let num1 = 1 + Math.floor(Math.random() * 10);    // Math. random은 0부터 10미만인 9까지 생성. 
console.log(num1);


//(num1 %2 == 0 && num % 3 == 0) 2&3의 배수// num1 % 6


if (result % 2 == 0&& result % 3 == 0) {    //6(2와3의 배수)걸러내기.
    console.log('2&3 의 배수');
} else if (num1 % 2 == 0 ) {
    console.log('2의 배수');
} else if (num1 % 3 == 0) {
    console.log('3의 배수'); 
} else {
    console.log('2와 3의 배수가 아님');
}

