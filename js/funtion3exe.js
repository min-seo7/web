//function3exe.js
//1. max(10,17) => "두개의 수중에서 큰 값은 17입니다."  
//2. sumUptp(7) => "1부터 7까지의 합은 22입니다." - 1부터 n까지 합구하기.
//3. diff(34, 17) => "두 수의 차는 17입니다." - 두개의 수 중 큰수에서 작은수 빼기.






function max(num1, num2) {
    if (num1 > num2) {
        console.log(`두 개의 수 중에서 큰 값은 ${num1} 입니다.`);
    } else if (num1 = num2) {
        console.log(`두 개의 수는 동일합니다.`);
    } else {
        console.log(`두 개의 수 중에서 큰 값은 ${num2} 입니다.`);
    }
}
max(1, 3);
max(2, 1);
max(3, 3);




function sumUptp(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i;
    }
    console.log(`1부터 ${n}까지의 합은 ${sum}입니다.`);
}
sumUptp(3);
sumUptp(100);

function diff(num3, num4) {
    if (num3 > num4) {
        console.log(`두 수의 차는 ${num3-num4} 입니다.`);
    } else {
        console.log(`두 수의 차는 ${num4-num3} 입니다.`);
    }

}
diff(10, 11);
diff(20, 40);