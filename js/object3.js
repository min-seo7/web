//object3.js



//배열의 함수: indexOf() 
let numArr = [10, 21, 33, 54, 16, 73]
let result = numArr.indexOf(33);   //배열요소 33의 인덱스값 반환.   
let test = numArr.indexOf(333);
console.log(result);
console.log(test); //해당요소가 없다면 배열을 벗어난 -1인덱스 반환.

//문자열 indexOf사용법~
let strAry = ["홍길동", "김길동", "홍길순"];
strAry.forEach(function(item){
    if(item.indexOf("홍") !== -1) {      //배열의 요소중에 "홍"이 있으면 출력조건. 
        console.log(item);
    }
});



//numAry(변수) => 10~50사이의 값(임의이 값 생성)후 10개 저장. ==> 콘솔에 forEach문을 사용해서 출력하세용!
//배열선언
let numAry = [ ]; 
for(let i = 0; i < 10; i++) {
   let raN = Math.floor(10 + Math.random() * 41);
   numAry[i] = raN;    //1. numAry.push(raN);으로 가능! 2.nunAry.push(Math.floor(10 + Math.random()*41)) 1은 값을 받아줄 변수를 생성해야하지만 2는 변수생성없이 바로 배열에 push가능!
}


//임의의 값으로 생성된 배열요소 확인. 
numAry.forEach(function(item){
    console.log(item);
})


// 생성된 배열의 요소가 10 ~ 50사이의 값이 맞는지 every()로 검증. [3가지 - ranT1,2,3] 
let ranT1 = numAry.every(function(item){     
    return  9 < item && item < 51 ;     // 9 <item < 51 안됨.......
})

let ranT2 = numAry.every(function(item){
    if(item >=10 && item <=50) {
        return true;
    } else {
        return false;
    }
})

let ranT3 = numAry.every(item => 9 < item && item <51);
