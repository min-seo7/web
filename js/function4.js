//function4.js
// 함수 + 반복문 + 배열;
//
let num = 10;
num = "10, 홍길동";
let numAry = [10, 20]; //new Array();
numAry[0] // 인덱스 값. 
numAry[2] = 30; // 값 추가
numAry[3] = 50;
numAry[4] = "Hong"; //타입이 다르게 배열원소 사용 지양.
numAry[4] = 70;
numAry[5] = 90;
numAry[6] = 110;



console.log(numAry[4]);
console.log(`배열의 크기: ${numAry.length}`); //배열크기 확인.



//배열 + for반복문과 잘 쓰임!
for (let i = 0; i < numAry.length; i++) {
    console.log(`[i]의 값: ${i}, 배열의 값: ${numAry[i]}`);
}


//연산가능. 
console.log(`numAry[6] - numAry[2] = ${numAry[6] - numAry[2]}`);


//배열요소의 누적합.
let sum = 0;
for (let i = 0; i < numAry.length; i++) {
    if (i % 2 == 0) { //(조건) 배열의 짝수 요소만 합.
        sum += numAry[i];
        console.log(sum);
    }
}
console.log(`sum = ${sum}`);



//(조건)배열의 요소가 50보다 클때만 누적합. 
sum = 0;
for (let j = 0; j < numAry.length; j++) {
    if (numAry[j] > 50) {
        sum += numAry[j];
    }
}
console.log(sum);



//배열변수: ages 27, 28, 25, 30, 31, 36
//나이가 제일 많은 사람. max(초기값: 0), max 변수에 배열요소를 비교해서 담기!
let ages = [27, 28, 25, 30, 31, 36];
let max = 0;

for (let i = 0; i < ages.length; i++) {
    if (ages[i] > max) {
        max = ages[i];
    }
}
console.log(`${max}가 제일 많은 나이입니다.`)



//위에 for문을 함수로 만들기: getMax()
function getMax(param1 = []) {
    let max = 0;

    for (let i = 0; i < param1.length; i++) {
        if (param1[i] > max) {
            max = param1[i];
        }
    }
    return max;
}
getMax(ages);
console.log(`결과는 ${getMax([30, 17, 22, 34, 27])} 입니다.`)


//함수 getMinValue(매개값으로 배열)
function getMinValue(value = []) {
    min = value[0];    //min선언시 초기값을 0으로 하면 0이 제일 작은 값이 됨. [배열첫번째 요소로 정의해서 비교!]
    for (let i = 0 ; i < value.length ; i++) {
        if (value[i] < min){
            min = value[i];
        }
    }
   return min;    //반환!!!!!!!! 반환안하면 undefined.
}
console.log(`결과는 ${getMinValue([20,27,17,30])} 입니다.`)
