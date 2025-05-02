//리스트 생성
document.querySelector('#add').addEventListener('click', newli)

function newli() {
    let item = document.getElementById('#item').value;

    if(item === ' '){
        alert('입력해주세요.');
        return;
    }

    let ul = document.createElement('ul');
    let li = document.createElement('li');
    let t = document.createTextNode(item);
    li.innerHTML = t;
    

    
    li.appendChild(t);
    ul.appendChild(li); 


    document.getElementById("#item").value = "";
    item.setAtrtibute('input','autofocus');
};



//입력& 입력값 받아 배열추가. [조건: 공란x, 배열동일원소x(for-of)]
//입력상자 초기화 & autofocus

//입력값은 동적추가.
//x 클릭이벤트, 안보이게 display:none;