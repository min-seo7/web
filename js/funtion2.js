//funtion2.js

function sum(num1 = 0, num2 = 0) { //num1과 2에 초기값을 제시하여, 매개변수전달 안될시 초기값으로 사용.
    let result = 0;
    result = num1 + num2;
    return result; //함수가 호출된 곳으로 반환.
}


function printStar(times = 1, shape = '⭐') { //times에 1로 초기값 설정. 함수 호출시 매개변수전달이 없으면 1로 초기값사용.
    let str = " ";
    for (let i = 1; i <= times; i++) {
        str += shape;
    }
    console.log(str);
}

//함수호출.
printStar(2, '🌞'); //햇님안넣으면 초기값인 별로 나옴!
console.log(sum(10)); //함수에 초기값이 정의되어, 2번째 매개변수가 없어도 초기값으로 사용. 


//구구단을 출력하는 함수.
function printGugudan(dan = 2) {
    for (let i = 1; i <= 9; i++) {
        document.write(`<p>${dan} X ${i} = ${dan * i}</p>`);
    }
}

printGugudan(13);