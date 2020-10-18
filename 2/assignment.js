const task3Element = document.getElementById('task-3');

function text() {
    alert('Jesus loves me');
}

function sayName(name) {
    alert(name);  
}

text();
sayName('Сантьяго');

task3Element.onclick = text;

function returnLine(text1, text2, text3) {
    return text1 + text2 + text3;
}
let line = returnLine('Бог', 'есть', 'свет');

alert(line);
