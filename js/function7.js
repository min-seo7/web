//function7.js     [for-in, for-of 사용!!!!!]
console.log(friends);



let friend = {
    name: "김민규",
    age: 20, 
    phone: "010-1111-2222"
}

//for - in : 객체의 속성을 반복.!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
for (let prop in friend) {
    console.log(`prop:${prop}, val: ${friend[prop]}`);
}



//함수: makeRow(friends = {})
function makeRow(friends = {name, age, phone}) {
    let str ="";
    str += "<tr>";
    for (let prop in friend) {
        str += `<td>${friend[prop]}</td>`;
    }
    // str += `<td> ${friends.name}</td><td> ${friends.age}</td><td> ${friends.phone}</td>`;  [for-in으로 간단하게 가능!]
    str += "</tr>";
    return str;
}



//출력
let titles = ["이름", "나이", "연락처"];


let tlist = "";
tlist += "<table class = 'table'>";
tlist += "<thead>";
for (let title of titles) {
    tlist += `<th>${title}</th>`;
}
tlist += "</thead>";
tlist +="<tbody>";
//데이터 - > row 생성.
// for(let i = 0; i < friends.length; i++) {   // 배열반복을 [for-of로 사용]
//     tlist += makeRow(friends[i]);
// }


// for - of : "****배열******반복.   (****for-in은 객체.)
for (let friend of friends) {
    tlist += makeRow(friend);
}
tlist += "</tbody></table>";
document.write(tlist);