//object4.js
//filter(): 배열요소 필터링(조건)해서 새로운 배열 생성.

let numAry = [20, 27, 33, 42, 19, 63, 52];

let filterAry = numAry.filter(function(item, idx, ary){
    if (item % 2 == 0) {
        return true;        //return이 안되면  undefined --> falsy;
    }
    return false;
});
console.log(filterAry);





//// slary가 5000이 넘는 사원들을 empAry에 저장. push//filter


let data = JSON.parse(json);
console.log(data);

let empAry = data.filter(function(sal){
    if(sal.salary > 4999) {    ///sal요소 안에 salary 항목지정해서 불러와야!
        return true;
    }
});
console.log(empAry);