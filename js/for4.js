//for4.js
document.write("<h3>TEST<h3>");

let str = " ";
str += "<table class ='table table-striped'>";
str += "<tbody>";
// let m = p; 
for (let n=1; n<=9 ;n++){
    // document.write(`${n}단`)
   str +="<tr>";
    for (let p = 1; p <= 9; p++){
        str +=`<td>${p} X ${n} = ${p * n}</td>`;
    }
    str +="</tr>";
}
str +="</tbody>";
str +="</table>";
document.write(str);




// for (let i = 1; i <= 9; i++){
//     document.write(`<h3>${i}단</h3>`);
//     for (let j = 1; j <= 9 ; j++){
//         document.write(`${i} X ${j} = ${i * j}<br>`);
//     }
// }

// /////////////////  
// for (let t = 1; t <= 9; t++){
//     document.write(`<h3>${t}단</h3>`);
//     for (let h = 1; h <= 9 ; h++){
//         for (let k = 1; k <= 9; k++){
//             document.write(`${t} X ${h} x ${k}= ${t * h * k}<br>`);
//         }
       
//     }
// }

