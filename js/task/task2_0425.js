//두 수를 랜덤하게 출력하여 대소비교.[수 범위: 40 ~ 70]

// 2. 임의의(Math.random) 두 개의 수(범위: 40 ~ 70)를 생성. "2개의 수중에서 큰 값은 ??, 작은값은 ??"

let ReNum1 = 40 + Math.floor(Math.random()*31); 
let ReNum2 = 40 + Math.floor(Math.random()*31); 

console.log("랜덤하게 나온 두 수는 "+ ReNum1+" 와와 " + ReNum2 + " 입니다.");

console.log("두 개의 수 중에서 큰 값은 " + Math.max(ReNum1, ReNum2) +" 이고 작은 값은 " + Math.min(ReNum1, ReNum2) + " 입니다.")