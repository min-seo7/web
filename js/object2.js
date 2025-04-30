//object2.js
//배열내장객체생성: new Array() 또는 []
//관련메소드: push(배열 뒤에 추가), pop(뒤에 제거), unshift(앞에 추가), shift(앞에 제거) => forEach.(반복)

let arr1 = [10,20,30];     //new Array(); --> 함수로 쓰면 값 넣는 메소드로 배열의 요소넣어줌.
arr1 [3] = 40;
arr1.push(50); //추가 메소드. 
arr1.unshift(60);   //맨 앞에 요소 추가  arr1 = [60,10,20,30,40,50,]
arr1.pop(); //맨 뒤에 요소 삭제. 매개변수x    arr1 = [60,10,20,30,40] 
arr1.pop();     //arr1 = [60,10,20,30]
arr1.shift();    //arr1 = [10,20,30]
arr1.splice(1, 0, 15);  //1번인덱스 15추가 //splice(대체할 위치 인덱스번호, 대체할 요소를 개수, 요소) 2번째 매개변수가 '0'은 해당 인덱스에 요소가 추가됨. 
arr1.splice(1,0,15,16,17); //1번 인덱스에 15, 16, 17 추가. [splice는 삭제, 추가, 수정이 가능!]


//배열객체의 내장함수: every, some 
let result = arr1.every(function(item, index, ary) {     //익명함수 매개변수 순서정해짐. 
    return item % 2 == 1;     //배열의 모든(every) 요소가 홀수 일때 True반환. (some)은 배열요소중 하나만 만족해도 True.
});    //let result = arr1.some(item => item % 2 ==1);간결하게 표현가능.
console.log(result);

//배열객체의 내장함수: forEach
arr1.forEach(function(item, index, ary) {         //furEach는 함수(익명함수)가 매개값으로 와야해욧! 익명함수의 매개변수의 역할 정해져있음.
    console.log(item, index);     //item는 배열의 요소를 가리킴. index는 인덱스. 
});   

console.log(arr1);

