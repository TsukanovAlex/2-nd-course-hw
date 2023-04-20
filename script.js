const seasons = (month) => {
    month = Number(prompt('Введите номер месяца'));
    if (month > 12 || isNaN(month) || month == false) {
        let error = confirm(' Такого месяца не сущестует! Или Вы ввели не число. \n Повторим?');
        if (error == true) {
            seasons();
        } else {
            return
        }
    } else if (month === 1 || month === 2 || month === 12) {
        alert('Зима');
    } else if (month >= 3 && month <= 5) {
        alert('Весна');
    } else if (month >= 6 && month <= 8) {
        alert('Лето');
    } else {
        alert ('Осень');
    };
    let repeat = confirm(' Отлично! \n Сыграем еще раз?');
    if (repeat == true) {
        seasons();
    } else (alert ('До встречи!'));
};  