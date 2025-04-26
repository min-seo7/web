//condition3 학점세분화.
let result = Math.floor(Math.random() * 101); // 0 ~ 100

console.log(result);

if (result >= 95) {
    console.log(result + "학점은 'A+' 입니다.");
} else if(result >= 90) {
    console.log(result + "학점은 'A' 입니다.");
} else if(result >= 85) {
    console.log(result + "학점은 'B+' 입니다.");
} else if(result >= 80) {
    console.log(result + "학점은 'B' 입니다.");
} else if(result >= 75) {
    console.log(result + "학점은 'C+' 입니다.");
} else if(result >= 70) {
    console.log(result + "학점은 'C' 입니다.");
} else if(result >= 65) {
    console.log(result + "학점은 'D+' 입니다.");
} else if(result >= 60) {
    console.log(result + "학점은 'D' 입니다.");
} else if(result >= 0) {
    console.log(result + "학점은 'F' 입니다.");
} 