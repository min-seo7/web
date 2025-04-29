//function5.js
let names = ["홍길동", "박춘식", "김민수", "이영식"];

let search = prompt("검색할 이름을 입력하세요.");

// for (let i = 0; i < names.length; i++){
//     if (search == names[i]) {
//         alert(`검색한 이름 ${names[i]} 가 존재합니다.`);
//         break;   //해당 이름이 검색되면 break로 반복문 탈출. (break없으면 배열길이만큼 다 비교.)
//     } else {
//         alert (`없음`);
//     }
// }


let i = 0;
let exists = false; //for문 사용시, 홍길동은 배열요소 1번째로 바로 한번만 비교하지만, 박춘식의 경우 배열[0]을 비교 후 두번째 검색됨.
while (true) { //for와 while
    if (i == name.length) {
       break;
    } 
    if (search == names[i++]){
        exists = true;
        break;
    }
} //end of while.
if (exists) { //찾는 친구의 이름이 존재. 
    alert('있음');
} else {
    alert('없음');
}