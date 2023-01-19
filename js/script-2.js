"use strict"

let m
let n

for(let i = 0; i < 100; i++) {
    m = +prompt('Введіть число m');
    n = +prompt('Введіть число n');
    if (m < n && Number.isInteger(m) && Number.isInteger(n)) {
        break
    }
}

nextPrime:
for (let i = m; i <= n; i++) {
    for(let j = 2; j < i; j++){
        if (i % j == 0 && i != 1) continue nextPrime
    }
    console.log(i)
}

