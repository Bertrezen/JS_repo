console.log('======== 1 задание ========');

var max = 999;
        var digit = {
          number: Number(prompt('Введите число от 0 до 999')),
          units: 0,
          tens: 0,
          hundreds: 0,
        };

        if (digit.number <= 9 && digit.number >= 0){
          digit.units = digit.number;
        } else if (digit.number <= 999 && digit.number >= 0){
          digit.units = Math.floor(digit.number % 10);
          digit.tens = Math.floor(digit.number / 10 % 10);
          digit.hundreds = Math.floor(digit.number / 100 % 10);
        } else {
            digit.number = 0;
            console.log('Вы ввели число за диапазоном 0 - 999');
        }
        
        console.log(digit);