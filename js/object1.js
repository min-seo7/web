//object1.js
//객체지향 (자바)+함수: 컴파일, 함수기반(자바스크립트)+객체: 인터프리터.
//객체: this => 객체자신을 의미.

//this => 1. 객체(객체를 가리킴.) 2. 함수내의 this는 (window객체를 가리킴.) 3. 이벤트의 대상[function8에서 console로그 확인으로 확인해보셩!]
console.log(window);    //함수 내 winow객체를 확인!   window안 내장객체들에 document, aler등등이 있음! window가 제일 상위!

//함수 내부의 this
function sum() {
    console.log(this);      //this가 window객체를 갖고 있음을 확인. 
}
sum();



//객체 내부의 this.  
let obj = {                 //
    name: "홍길동", 
    age: 20,
    showName: function () {  //객체 내 함수정의방법 1. 
        console.log(this);
        return `이름은 ${this.name}입니다.`         //this는 객체자신. name은 this객체안의 속성.
    }, 
    setName(name) {     //객체 내 함수정의방법 2.  == setName(){} 과 setName: function(name){} 동일한의미.
        this.name = name;
    }
}
obj.setName("김길동");  //setname함수로 객체내 이름속성변경.
let result = obj.showName();  //obj객체가 가지고 있는 showName 메소드!
console.log(result);    //console내장객체, log메소드






// class 생성.                     let obj ve class Person: let obj는 객체의 속성값도 정의해둬서 재사용x, class Person은 구조만. 인스턴스 생성시 재사용ok
class Person {          //구조
    //name, age: 속성.
    //showName(), setName(): 메소드.
    constructor(name, age) {    //생성자.
        this.name = name;
        this.age = age;
    }
    //메소드
    showName() {
        return `이름은 ${this.name} 입니다.`;
    }
    setName(name){
        this.name = name;
    }
    showAge() {
        return `나이는 ${this.age} 입니다.`;
    }
    setAge(age){
        this.age = age;
    }
}

let choi = new Person("최민식", 22);  //인스턴스 생성.
choi.setName("최민수");     //choi의 최민식을 최민수로. 
console.log(choi.showName());

let park = new Person("박충식", 30);    //인스턴스 생성.
