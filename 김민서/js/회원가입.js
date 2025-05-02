document.querySelector('button').addEventListener('click',function(){
   
let ch = document.querySelector('#user-id').value;
let pw = document.querySelector('#user-pw1').value;

 //아이디 체크   
if (3 < ch.length || ch.length < 16) {
    alert('다시 입력해주세요.');
    return;
} 

ch.setAttribute('input', 'selected');

//비밀번호 체크
if (pw < 7){
    alert('다시 입력해주세요.');
    return;
}

//비밀번호 초기화, focus
document.querySelector('#user-pw1').value = " ";
pw.setAttribute('input', 'autofocus');
});
