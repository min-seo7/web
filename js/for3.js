//for3.js
let sum = 0; 
let avg = 0;
let count = 0; //'범위 안'에 입력된 누적합을 한 횟수. 

for (let i = 1; i <= 5; i++){
    let str = prompt("1~10까지의 숫자를 입력하세요.");
    let inputValue = parseInt(str);    //타입변경 str -> int
    //누적. 
     //입력되는 inputValue의 범위: 1 <= x <=10일 때, 누적합. 
    if(1 <= inputValue && inputValue <= 10) {
        sum += inputValue;
        count++;  //합 한 횟수를 누적
    }
}         
avg = sum / count; //평균계산.
console.log(`누적합계: ${sum}입니다. 평균: ${avg}입니다.`); 
