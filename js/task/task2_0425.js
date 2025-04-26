//두 수를 랜덤하게 출력하여 대소비교.[수 범위: 40 ~ 70]
let ReNum1 = 40 + Math.floor(Math.random()*31); 
let ReNum2 = 40 + Math.floor(Math.random()*31); 

console.log(ReNum1, ReNum2)

if(ReNum1 > ReNum2) {
    console.log("두 개의 수중에서 큰 값은 " + ReNum1 + " 이고 작은 값은 " + ReNum2 + " 입니다." );
} else if(ReNum2 > ReNum1) {
    console.log("두 개의 수중에서 큰 값은 " + ReNum2 + " 이고 작은 값은 " + ReNum1 + " 입니다." );
} else {
    console.log("두 수의 값은 동일합니다.");
}
