// while3.js
//친구이름을 입력. => quit입력시 종료.  if(n==quit){break;} 
//
// let nm = "" ;       //반복문 밖에서 선언을해야. 반복문 내에 작성하면 반복할때 마다 초기화됨.
// while(true){
//     nm = prompt("친구이름을 입력하세요.");
//     if(nm == "quit") {
//      break;
//     } 
//      document.write(`${nm}`)
// }



//교수님꺼

let str = `<table class = "table">
            <tbody>`;
let running = true;
while (running) {
    let userValue = prompt("친구이름을 입력하세요.");
    if(userValue == "quit") {
        running = false;
        continue;   //입력된 값이 quit일경우 continue 아래구문을 실행안함. 
    }
    str += `<tr><td>${userValue}</td><td><button onclick="removeElement(event)" class="btn btn-danger">삭제</button></td></tr>`;// 버튼태그에 onclick속성으로 removeElemt 함수를 호출. 
}
str += `</tbody></table>`;
document.write(str);




//버튼 태그에 화면요소를 삭제하는 함수.
function removeElement(pra1) {
    console.dir(pra1.target.parentElement.parentElement);  // console.dir은 콘솔에서 객체의 속성을 보기 위한것. 
    pra1.target.parentElement.parentElement.remove();  //제거함수. 위에 removeElement함수가 호출되고, 함수의 기능정의. 
}