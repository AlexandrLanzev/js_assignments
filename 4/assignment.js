const randomNumber = Math.random(); // produces random number between 0 (including) and 1 (excluding)
// Перввое задание
if (randomNumber > 0.7) {
    alert ('show alert))')
}
// Второе задание
const myArray = [2, 3, 5, 8];

for (let i = 0; i < myArray.length; i++) {
    console.log(myArray[i]);
}
for (const logEntry of myArray) {
    console.log(logEntry);
}
// Третье задание
for (let i = 3; i <= myArray.length && i >= 0;  i--) {
    console.log(myArray[i]);
}
// Четвертое задание
const randomNumber2 = Math.random(); // produces random number between 0 (including) and 1 (excluding)
if (randomNumber > 0.7 && randomNumber2 > 0.7) {
    alert('Оба > 0.7');
}

if (randomNumber < 0.2 || randomNumber2 < 0.2) {
    alert('Любое не больше 0.2');
}