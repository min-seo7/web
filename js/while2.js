//while2.js
//사용자에게 1 ~ 10까지 임의의 수를 입력하도록 요청. prompt.
//범위 밖의 값을 입력하면 종료 & 입력값 누적합 콘솔출력.


let sum = 0;
let inputNo = 0;


while(true) {
    inputNo = parseInt(prompt("1 ~ 10까지 임의의 수를 입력."));
    if (inputNo < 1 || inputNo > 10) {  //1차로 입력값 거르기. (1보다작고, 10보다 큰수)
        break;
    }
    sum += inputNo; //누적합.
}
console.log(`누적값은 ${sum}입니다.`);


