// Игра "Времена года"

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
        alert('Осень');
    };
    let repeat = confirm(' Отлично! \n Сыграем еще раз?');
    if (repeat == true) {
        seasons();
    } else (alert('До встречи!'));
};

// Игра "Запомни слова"

function memorizwords() {
    const arr = ['Яблоко', 'Груша', 'Дыня', 'Виноград', 'Персик', 'Апельсин', 'Мандарин'];
    const newArr = arr.join(', ')
    alert(' Начнем игру!\n Сейчас ты увидишь ряд слов. Постарайся запонить слова и их порядок! \n  Удачи!');
    alert(arr.sort(() => Math.random() - 0.5));
    
    let answerUser1 = prompt('Напиши слово, котрое было первым в ряду?');
    let answerUser2 = prompt(' Ответ принят!\n А теперь вспомни и напиши слово, которое было последнем в ряду?');
    
    if (answerUser1.toLowerCase() === arr[0].toLowerCase() && answerUser2.toLowerCase() === arr[arr.length - 1].toLowerCase()) {
        const win = confirm(' Поздравляю, Вы угадали! :) \n Повторим?');
        if (win == true){
            memorizwords();
        } else {
            (alert('До встречи!'));
        };
    } else if (answerUser1.toLowerCase() === arr[0].toLowerCase() || answerUser2.toLowerCase() === arr[arr.length - 1].toLowerCase()) {
      const almost = confirm(' Вы были близки к победе! :)\n Попробуете еще раз?'); 
        if (almost == true){
            memorizwords();
        } else {
        (alert('До встречи!'));
        };
    } else {
     const lost = confirm(' Вы ответили не верно :( \n Давай попробуем еще раз?');
         if (lost == true){
            memorizwords();
         } else {
        (alert('До встречи!'));
        };
    }
}