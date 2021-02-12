console.log('======== 1 задание ========');

var max = 999;
var digit = {
    number: Number(prompt('Введите число от 0 до 999')),
    units: 0,
    tens: 0,
    hundreds: 0,
};

if (digit.number <= 9 && digit.number >= 0) {
    digit.units = digit.number;
} else if (digit.number <= 999 && digit.number >= 0) {
    digit.units = Math.floor(digit.number % 10);
    digit.tens = Math.floor(digit.number / 10 % 10);
    digit.hundreds = Math.floor(digit.number / 100 % 10);
} else {
    digit.number = 0;
    console.log('Вы ввели число за диапазоном 0 - 999');
}

console.log(digit);

console.log('======== 2 задание ========');

function getNumber(min, max) {
    let number = parseInt(Math.random() * (max - min) + min);
    if (number === -0) number = 0;
    return number;
}

let basket = [
    {
        product: "apple",
        price: getNumber(50, 100)
    },
    {
        product: "milk",
        price: getNumber(50, 100)
    },
    {
        product: "cheeze",
        price: getNumber(50, 100)
    },
    {
        product: "bread",
        price: getNumber(50, 100)
    }
];

let basketPrice = 0;
for (let prod of basket) {
    basketPrice += prod.price;
    console.log("Товар " + prod.product + " стоит: " + prod.price);
}

console.log("Стоимость корзины: " + basketPrice + " у.е.");

console.log('======== 3 задание ========');

function countBasketPrice(basket) {
    let funBasketPrice = 0;
    for (let prod of basket) {
        funBasketPrice += prod.price;
    }
    return funBasketPrice;
}

console.log("Стоимость корзины: " + countBasketPrice(basket) + " у.е.");