//dom2.js

//user DB
let userList = [{
    uid: "user01",
    uname: "홍길동",
    phone: "010-1111-2222"
}, {
    uid: "user02",
    uname: "최시욱",
    phone: "010-3333-4444"
}, {
    uid: "user03",
    uname: "박영돈",
    phone: "010-5555-6666"
}, {
    uid: "user02",
    uname: "이명식",
    phone: "010-7777-8888"
}];

//// userList의 정보 활용해서 출력. 
userList.forEach(function (user) { //userList 속성을 가지고 오는 익명함수. 
    let tr = makeRow(user);
    document.querySelector('#list').appendChild(tr);
});


////////////////////////////이벤트들.

//input받은 data 추가(sumit)버튼 이벤트
document.querySelector('form[name="addForm"]').addEventListener('submit', function (e) {
    e.preventDefault(); //form의 기본기능 차단. 
    console.log(e);
    let uid = document.querySelector('input[name="userId"]').value;
    let uname = document.querySelector('input[name="userName"]').value;
    let phone = document.querySelector('input[name="phone"]').value;
    //validation check. (유효한 값 체크)
    if (!uid || uid.length < 3) {
        alert('아이디를 확인하세요.');
        return;
    };
    if (!uname || uname.length < 5) {
        alert('이름을 확인하세요.');
        return;
    };


    //uid, uname, phone을 묶은 객체생성[for-in을 사용해서 반복출력]
    let userInfo = {
        uid,
        uname,
        phone
    }
    let tr = makeRow(userInfo); //입력한 값.
    //tbody의 하위요소 등록. 
    document.querySelector('#list').appendChild(tr);
});

//선택(checked)된 곳을 찾아 삭제(이벤트 추가)
document.querySelector('button.selected').addEventListener('click', function (e) {
    document.querySelectorAll('tbody#list input').forEach(function (item) { //해당위치에 forEach의 함수반복(중복checked확인.) 
        if (item.checked) {
            item.parentElement.parentElement.remove();
        }
    })
});



/// input data와 user DB도 추가할 수 있는 함수.    
function makeRow(user = {
    uid,
    uname,
    phone
}) {
    //tr생성.
    let tr = document.createElement('tr');
    tr.addEventListener('click', function (e) { //이벤트핸들러 3번째 blooen값으로 이벤트미적용범위 제어할 수 있음. 
        // e.stopPropagation();     한개의 tr안에 삭제와, 클릭시 input박스에 값이 들어가는 이벤트 두개존재. tr이 상위로 하위이벤트 막을시 삭제버튼 작동안해요! [동일한 요소에 두개 이벤트발생시 이벤트 막는것.(상위->하위 요소찾기// 하위 -> 상위요소찾기)]
        // tr안에 button이 존재하여 tr에 적용x.
        console.log(tr.children[0].innerText); //tr하위의 자식요소찾기.[자식요소가 여러개일 경우 배열로.]
        document.querySelector('input[name="userId"]').value = tr.children[0].innerText; //데이터 리스트 행 클릭시 각 요소에 맞게 input박스에 값넣기.
        document.querySelector('input[name="userName"]').value = tr.children[1].innerText;
        document.querySelector('input[name="phone"]').value = tr.children[2].innerText;
    }, false); //true ==> capturing방식  //상->하:캡쳐링    하->상: 버블링

    //check박스 생성. 
    let td2 = document.createElement('td');
    let ch = document.createElement('input');
    ch.setAttribute('type', 'checkbox'); //태그에 속성추가.
    td2.appendChild(ch);
    tr.appendChild(td2);

    //td생성.
    for (let prop in user) {
        let td = document.createElement('td');
        td.innerHTML = user[prop]; //userInfo의 ["uid"]
        tr.appendChild(td);
    }
    //삭제버튼 생성
    let td = document.createElement('td'); //<td></td> 생성
    let btn = document.createElement('button'); //<button></button>생성
    btn.innerText = "삭제"; //<button>삭제</button>
    btn.className = "btn btn-warning"; // <button class = "btn btn-danger"> 버튼태그에 클래스 추가방법
    btn.addEventListener('click', removeUserFnc); //false: bubbling(하->상)
    td.appendChild(btn); //<td><button>삭제</button></td>
    tr.appendChild(td); //<tr><td><button>삭제</button></td></tr>
    return tr;
};


//삭제버튼의 이벤트핸들러 함수. (삭제기능 callback함수). 
function removeUserFnc(e) {
    e.stopPropagation(); //이벤트 전파 중단. 삭제버튼 클릭시 tr클릭하면 input box에 벨류값이 나오는것을 막는것. 
    console.log(e.target, this); //e.target == btn  or this   //removeusrfnc을 받는 변수를 찾아서... 
    e.target.parentElement.parentElement.remove();
};