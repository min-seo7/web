//while2.js
//사용자에게 1 ~ 10까지 임의의 수를 입력하도록 요청. prompt.
//범위 밖의 값을 입력하면 종료 & 입력값 누적합 콘솔출력.


let sum = 0;
let inputNo = 0;

// while (true) {
//     inputNo = parseInt(prompt("1 ~ 10까지 임의의 수를 입력."));
//     if (1 > inputNo || inputNo > 10) {
//         console.log(sum);
//         break;
//     } else {
//         sum += inputNo;
//     }
// }



while(true) {
    inputNo = parseInt(prompt("1 ~ 10까지 임의의 수를 입력."));
    if (inputNo < 1 || inputNo > 10) {
        break;
    }
    sum += inputNo;
}
console.log(`누적값은 ${sum}입니다.`);



// while(true) {
//     inputNo = parseInt(prompt("1 ~ 10까지 임의의 수를 입력."));
//     if () 

// }