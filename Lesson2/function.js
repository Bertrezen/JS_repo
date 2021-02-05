'use strict'

// Вопрос 3

var x = Number(prompt('Введите первое число'));
var y = Number(prompt('Введите второе число'));

if (x >= 0 && y >= 0) {
    c = x - y;
    alert(c);
}
else if (x < 0 && y < 0) {
    c = x * y;
    alert(c);
}
else {
    c = x + y;
    alert(c);
}

// Вопрос 4



// Вопрос 5

var a = 2;
var b = 3;

function plus(a, b) {
    return a + b;
}

function minus(a, b) {
    return a - b;
}

function div(a, b) {
    return a / b;
}

function mult(a, b) {
    return a * b;
}

// Вопрос 6

function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case 'сложение':
            return arg1 + arg2;
            break;
        case 'вычитание':
            return arg1 - arg2;
            break;
        case 'деление':
            return arg1 / arg2;
            break;
        case 'умножение':
            return arg1 * arg2;
            break;
    }
}