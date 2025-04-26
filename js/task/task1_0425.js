//두 수 입력를 입력받아 큰 수 출력.

let num1 = parseInt(prompt ("첫번째 수를 입력하세요."));
let num2 = parseInt(prompt ("두번째 수를 입력하세요."));

console.log("입력된 두 수는 " + num1 + " 와 " + num2 + " 입니다." )

if(num1 > num2) {
    console.log(num1, "은", num2, "보다 더 큰 수 입니다." );
} else if(num2 > num1) {
    console.log(num2, "는", num1, "보다 더 큰 수 입니다.");
} else {
    console.log("두 수의 값은 동일합니다.");
}