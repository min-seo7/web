//while1.js

//1 ~ 10 까지의 반복, 홀수 값만 콘솔에 출력.(for)
for(let i = 1; i <= 10; i++){
    if(i % 2){
        console.log(i);
    }
}


// for는 조건식을 통해 반복횟수 지정가능. while은 조건만족여부로 반복을 결정.
let no = 1;
while(1) {
    if(no % 2 == 0)  {           //나머지 0이면 false, 1이면 true.
        console.log(no);
    }
    no++;   //증감.
    if (no > 10) {
        break;  //반복종료.
    }
}



//임의 값(0 ~ 100)값을 생성하다가 30보다 작은 값이 반복종료
let running = true;
while(running) {
    let num = Math.floor(Math.random() * 101);
    console.log(num);

    if(num < 30) {  //종료조건
        // break;
        running = false;
    }

}
console.log("end of prog.");