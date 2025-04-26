//JS 주석문1     
        // /*js주석문2*/
        
        //데이터베이스 관리 시스템(DBMS) - 오라클.
        //정보 -> front -> back -> oracle.
        //변수(variable) - 데이터타입(문자, 숫자, boolean-T/F, 배열)
        
        
        let name; //JS의 변수 선언.
        name = "이"; //변수 name에 값 '이T'를 대입.동일한 변수명 중복선언 불가. 
        let name1 = "홍길동"; //변수초기화. (선언과 동시에 변수대입)
        name = "김민수";  

        console.log(name); //콘솔영역에 출력해주는 기능
        const age = 20; //변수선언 & 초기화.
        // age = 30; // 30할당. const변수는 변경x.

        //선택자(selector)
        let item = document.querySelector('#userValue');   //id값이 uservalue인 값을 찾아옴~
        console.dir(item);
        name = item.value; //name에 item의 vlaue 담긴 값을 변경. item은 userVlaue의 id를 갖고있음. 
        console.log(name); //name에 김민수에서 김민규로 값이 바뀜. 