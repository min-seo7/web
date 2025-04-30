//dom1.js
//createElement(), appendChild(), setAttribute(), querySelector()


//사과 2000원을 js를 사용해서 html문서에 넣기
let li = document.createElement("li"); //  <li/>
let sp1 = document.createElement("span"); // <span/>
sp1.innerText = "사과";
let sp2 = document.createElement("span"); // <span/>
sp2.innerText = "2000원";
let txt = document.createTextNode(" ");

li.appendChild(sp1);
li.appendChild(txt);
li.appendChild(sp2);

console.log(li);
document.querySelector('ul').appendChild(li);






//이벤트!!!! 리스트등록버튼 
document.querySelector('#addBtn').addEventListener('click', addcallback);

function addcallback() {
    let fruit = document.getElementById('fruit').value; //아이디값만 넣으면됨 '#'제외.
    let price = document.querySelector('#price').value;

    //입력값이 있는지 체크.
    if (!fruit || !price) {
        alert('값을 입력하세요.');
        return; //함수의 실행종료. 
    }

    let newList = createLi(fruit, price);
    document.querySelector('ul').appendChild(newList); //ul 과 newList(li) 관계를 만들어줌. 

    //입력값 초기화
    document.getElementById('fruit').value = " ";
    document.querySelector('#price').value = 0;
}


function createLi(fruitName, furitPrice) {
    let li = document.createElement("li");
    let sp1 = document.createElement("span");
    sp1.innerText = fruitName;
    let sp2 = document.createElement("span");
    sp2.innerText = furitPrice + "원";
    let txt = document.createTextNode(" ");

    li.appendChild(sp1);
    li.appendChild(txt);
    li.appendChild(sp2);
    li.appendChild(btn);   //배치순서도 중요!  가격, 금액, 삭제버튼 순서.

    return li; // 함수가 호출된 곳으로 li 반환.
}

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


//삭제버튼. (js에서 버튼생성 및 이벤트 기능추가)   
let btn = document.createElement("button");         //<button id="delbtn" class="btn btn-dager">삭제</button>
btn.innerText = "삭제";
btn.setAttribute('class', 'btn btn-danger');    //버튼에 속성 추가방법 1 
// btn.className = "btn btn-danger";            //버튼에 속성 추가방법 2
btn.addEventListener('click', function(){   //클릭 이벤트등록. (리스트 등록이벤트로 생성된 요소를 삭제하는것.)
    btn.parentElement.remove();
});


//HTML태그로 생성버튼에 이벤트!(이미 존재하는 요소.)
document.querySelectorAll('ul button').forEach(function(item){   //ul 태그 하위의 삭제버튼만 select  [리스트 내 버튼태그를 foreach로 찾고, 찾은 곳에 이벤트추가]
    console.log(item);
    item.addEventListener('click', function(){
        item.parentElement.remove();
    });
});




//li에 스타일 지정위해 이벤트 등록.
document.querySelectorAll('li').forEach(item => {    //li 찾아서. 이벤트 등록
    item.addEventListener('mouseover', function(){
        item.style.background = "pink";
    })
    item.addEventListener('mouseout', function(){
        item.style.background = "none";
    })
});




//리스트에 추가로 등록한것에 배경컬러 올라가는 이벤트 만들기. 
//19장 실습.읽어오기!