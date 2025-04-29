//variable2.js

/* js는 값이 할당되는 시점에 변수타입 결정됨.(느슨함) */ //cf) java는 선언시 타입지정 int num1;

let num1 = 100; //숫자타입
console.log(typeof num1);
num1 = "hundred";
console.log(typeof num1);

let num_2 = 200; //숫자타입
let nameOfffriend = "홍길동";

let birthOfDate = new Date(); //js는 대-소문자 구분함. Birth =/= birth  //object타입
console.log(typeof birthOfDate);

let isOK = true;
isOK = 10 < 5; //false.
isOK = 10 > 5; //true.

if (isOK) { //isOk 값이 true일 경우 {} 블럭을 실행.
    console.log('isOK는 참입니다.');
}



// 배열: [100, 200, 250] 여러개의 값을 저장.
let numAry = [10, 20, 25, 31]; //배열의 index는 '0'부터 시작. 
console.log(numAry[0]);

let strAry = ["Hello", "Nice", "Good", 300]; //문자열 배열도 가능! //문자+숫자 섞어서도 가능하나 안씀!




// 객체(object)= "키: 값"의 형태로 저장.
let person = {                  //'객체'변수'는 한 개에 여러가지 정보가능. 
    name: "홍길동",
    age: 20,
    height: 168.9,
    weight: 65.3,
    personInfo: function() {        //함수는 기능. 
        console.log('이름은 ' + person.name +'이고 나이는 '+person.age);
    }
} 
person.personInfo();        //person이 가지고 있는 메소드 호출(call).

console.log(person.name);       //person의 속성중 name만!



//undefied, null 
let WhatIsThis;      //선언만 되어있으면 undefined. 상태임
WhatIsThis = document.querySelector('#userValue').value;  //uservalue의 vlaue값을 을 whatisthis에 넣음// .value가 없으면 html 그 아이디 전체요소를 가지고옴.
console.log(WhatIsThis);    //whatistish는 선언만 되어있어 null 값임. 
console.log(typeof WhatIsThis);     //null의 데이터 유형은 object.
