//      Создаем массив от 1 до 100
var arr = [];
var end = 1; // 0 и 1 не являются ростыми числами
while (end < 100) {
    end++;
    arr.push(end);
}
//      Удаляем все четные цифры
var a = 2;
var b = 2;
while (a <= 100) {
    a += b;
    arr.splice(arr.indexOf(a), 1);
}
//      Удаляет все цифры которые деляться на нечетные до 10
a = 4;
b = 3;
while (a < 100) {
    if (a % b === 0 && arr.indexOf(a) !== -1) {
        arr.splice(arr.indexOf(a), 1);
    } else {
        a++;
    }
}

a = 6;
b = 5;
while (a < 100) {
    if (a % b === 0 && arr.indexOf(a) !== -1) {
        arr.splice(arr.indexOf(a), 1);
    } else {
        a++;
    }
}

a = 8;
b = 7;
while (a < 100) {
    if (a % b === 0 && arr.indexOf(a) !== -1) {
        arr.splice(arr.indexOf(a), 1);
    } else {
        a++;
    }
}

console.log(arr);

console.log('======== 2 вариант ========');

let nums = 2; // 0 и 1 не являются ростыми числами

while (nums <= 100) {
    let check = true;
    for (let i = 2; i < nums; i++) {
        if (nums % i === 0) {
            check = false;
            break;
        }
    }
    if (check) console.log(nums);
    nums++;
}