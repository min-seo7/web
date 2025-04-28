// function1.js
//2개의 수에, 큰 값에 10을 더하고 작은 값에 5를 더한 후 두 수의 합을 구함. 

//함수의 정의.

function sum(parameter1, parameter2) {
    let re = 0;
    if (parameter1 > parameter2) {
        re = (parameter1 + 10) + (parameter2 + 5);
    } else {
        re = (parameter2 + 10) + (parameter1 + 5);
    }
    // console.log(`결과값 ${re}`);
    return re; //함수를 호출한 영역으로 결과 반환. 
} /// 함수


let num1 = 4,
    num2 = 2;

let result = sum(4, 2);
document.write(`결과값 ${result}`);

num1 = 5, num = 3;
sum(num1, num2); //함수에서 return값이 없으면 undefined.

result = sum(20, 19);
alert(`결과값 ${result}`); // alert은 경고창으로!
document.querySelector(`#result`).value = result;
