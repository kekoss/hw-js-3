/* 
    1. Цикли потрібно для того щоб зменшити кількість коду;
    2. В попередній дз використовував безкінечний цикл for для того, щоб користувач вводив правильні дані, в негативному випадку цикл продовжується;
    3. Явне приведення - це приведення яке використовується розробником, таке як Number(), String(), унарний плюс і т.д.
    неявне приведення = приведення яке використовується автоматично.
*/

"use strict"
let userNumber
for(let i = 0; i < 100; i++) {
   userNumber = +prompt("Введіть число від 1 до 100");
   if( userNumber >= 0 && userNumber <= 100 && Number.isInteger(userNumber)) {
    break
   }
}
let sum = 0 ;
for(let i = 0; i <= userNumber; i++) {
    if(i % 5 === 0 && i != 0) {
        console.log(i);
        sum = sum + i;
    } else if (userNumber < 5) {
        alert("Sorry, no numbers")
        break
    }
}