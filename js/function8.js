//fuction8.js
//1. Json.parse(문자열을 객체로 변환) vs. JSON.stringify(객체를 문자열로 변환)

console.log(json); //문자열.
let data = JSON.parse(json); //json 문자열을 JS의 객체로 변환.
console.log(data); // 객체.
console.clear(); //로그지우기.




//button<삭제> 템플릿.    /// deleteTr 함수만들기! 
let btnTemplate = "<button class='btn btn-danger' onclick='deleteTr(event)'>삭제</button>";    //tr생성함수 뒷자리에 붙일것.   

function deleteTr() {
    
}





for (let emp of data) { //[for of - 배열반복//for-in은 객체]
    console.log(emp);
}

console.clear();


///////////////////////////////

// 1) 이벤트 text박스에 성별 입력후 조회(버튼클릭)하는 이벤트
document.querySelector('button.btn-primary').addEventListener('click', function(){ //이벤트등록 {이벤트 발생조건}
    let searchValue = document.querySelector('#userValue').value;
    let list = " ";
    for (let emp of data){
        if (searchValue == "All" || searchValue == emp.gender) {
            list += makeTr(emp);
        } 
    }
    document.querySelector('table.table>tbody').innerHTML = list;
});  




//2) 이벤트 (드롭다운)select "change" 
document.querySelector('select#selectGender').addEventListener('change', function(){ //이벤트등록 {이벤트 발생조건}  //select태그에 change 이벤트.
    let searchValue = document.querySelector('#selectGender').value;   //if selectG의 셀렉트 옵션값을 가지고 searchValue에.
    let list = " ";
    for (let emp of data){                  
        if (searchValue == "All" || searchValue == emp.gender) {
            list += makeTr(emp);
        } 
    }
    document.querySelector('table.table>tbody').innerHTML = list;
}); 





//tr을 생성하는 함수.
function makeTr(emp = {}) {
    let str = "<tr>";
    for (let field of fields) {                        //배열반복.
        // console.log(emp[field]); //emp['id']  == emp.id 동일한 의미.
        str += `<td>${emp[field]}</td>`;
    }
    str += `<td>${btnTemplate}</td>`;
    str += "</td>";
    return str;
}



let fields = ['id', 'first_name', 'gender','email', 'salary'];      //firelds배열을 선언하고, [id, first_name, email] 배열의 속성정의.

//사원목록(table형식)을 출력.
let elist ="<table class ='table'><thead><tr>";
for (let field of fields){
    elist +=`<th>${field}</th>`;
}
elist +='<th>삭제</th>';
elist += "</tr></thead><tbody>";
for(let emp of data) {
    //console.log(emp);
    elist += makeTr(emp);
}
elist += "</tbody></table>";
document.write(elist);





// //makeTr함수test.
// console.log(makeTr({
//     id: 12,
//     first_name: "kildong",
//     email: "kildong@gmail.com"
// }));




///for(let i =0 ; i <data.length; i++)
//elist += makeTf(data[i]);
