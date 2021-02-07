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

var a = Number(prompt('Введите число от 0 до 15'));

switch (a) {
    case 0:
        console.log('0');
    case 1:
        console.log('1');
    case 2:
        console.log('2');
    case 3:
        console.log('3');
    case 4:
        console.log('4');
    case 5:
        console.log('5');
    case 6:
        console.log('6');
    case 7:
        console.log('7');
    case 8:
        console.log('8');
    case 9:
        console.log('9');
    case 10:
        console.log('10');
    case 11:
        console.log('11');
    case 12:
        console.log('12');
    case 13:
        console.log('13');
    case 14:
        console.log('14');
    case 15:
        console.log('15');
        break;
    default:
        console.log('До 15 считать не учили?');
        break;
}

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