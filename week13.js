//Задание 1
// Создайте переменную currentDate и присвойте ей текущую дату. Значение выведите в консоль.
let currentDate = new Date();
console.log(currentDate);

//Задание 2
// Создайте переменную currentYear и присвойте ей текущий год. Значение выведите в консоль.
let currentYear = currentDate.getFullYear();
console.log(currentYear);

//Задание 3
// Создайте переменную currentMonth и присвойте ей текущий месяц (от 0 до 11, где 0 - январь, 11 - декабрь). Значение выведите в консоль.
let currentMonth = currentDate.getMonth();
console.log(currentMonth);

//Задание 4
// Создайте переменную currentDay и присвойте ей текущий день месяца. Значение выведите в консоль.
let currentDay = currentDate.getDate();
console.log(currentDay);

//Задание 5
// Создайте переменную birthday и присвойте ей дату вашего дня рождения в текущем году. Значение выведите в консоль.
let birthday = new Date(currentDate);
birthday.setMonth('5');
birthday.setDate('5');
console.log(birthday);

//Задание 6
// Создайте переменную futureDate и присвойте ей будущую дату (например, через 1 месяц и 10 дней от текущей даты). Значение выведите в консоль.

let futureDate = new Date(currentDate);
futureDate.setMonth(currentDate.getMonth() + 1);
futureDate.setDate(currentDate.getDate() + 10);

console.log(futureDate);

//Задание 7
// Выведите в консоль разницу в днях между futureDate и currentDate
let difference = futureDate - currentDate;
console.log(Math.floor(difference/(1000*60*60*24)));

//Задание 8
// Создайте переменную pastDate и присвойте ей прошедшую дату (например, 5 дней назад от текущей даты). Значение выведите в консоль.
let pastDate = new Date(currentDate);
pastDate.setDate(currentDate.getDate() - 5);
console.log(pastDate);

//Задание 9
// Выведите в консоль разницу в днях между currentDate и pastDate
let difference1 = currentDate - pastDate;
console.log(Math.round(difference1/(1000*60*60*24))); 


//Задание 10
// Создайте переменную nextWeek и присвойте ей дату следующей недели. Значение выведите в консоль.
let nextWeek = new Date(currentDate);
nextWeek.setDate(currentDate.getDate() + 7);
console.log(nextWeek);

//Задание 11
// Выведите в консоль день недели для nextWeek
console.log(nextWeek.getDay());

//Задание 12
// Создайте переменную futureYear и присвойте ей значение текущего года плюс 5. Значение выведите в консоль.
let futureYear = new Date(currentDate);
futureYear.setFullYear(currentDate.getFullYear() + 5);
console.log(futureYear);

//Задание 13
// Создайте переменную futureDateInFutureYear и присвойте ей дату вашего дня рождения в будущем году (futureYear). Значение выведите в консоль.
let futureDateInFutureYear = new Date(birthday);
futureDateInFutureYear.setFullYear(currentDate.getFullYear() + 1);
console.log(futureDateInFutureYear);

//Задание 14
// Выведите в консоль разницу в годах между futureYear и текущим годом
let difference2 = futureYear - currentYear;
console.log(Math.round(difference2/(1000*60*60*24*12*365)));

//Задание 15
// Используя метод Date.parse(), создайте новый объект date и преобразуйте переменную strDate в дату.
// Выведите объект date в консоль.

let strDate = '2023-06-15T08:30:00.000Z';
let date = new Date(Date.parse(strDate));
console.log(date);

//Задание 16
// Используя метод Date.parse(), получите таймстамп (количество миллисекунд) из переменной strDate.
// Выведите таймстамп в консоль.
let dateTimestamp = Date.parse(strDate);
console.log(dateTimestamp);

//Задание 17
// Используя метод Date.parse(), попытайтесь преобразовать переменную wrongDate в дату. Добавьте условие, если результат преобразования является NaN, выведите в консоль сообщение 'Неправильный формат даты', в другом случае, выведите сообщение 'Правильный формат даты'.
// Подсказка: используйте условие if...else

const wrongDate = '2023-06-1155';

let rightDate = Date.parse(wrongDate);

if (rightDate == NaN){
    console.log('Неправильный формат даты');
} else {
    console.log('Правильный формат даты');
}
// console.log(rightDate);


//Задание 18
// Используя цикл if...else, проверьте является ли переменная number положительным. Результат выведите в консоль.
const number = 231;
let result;
if (number > 0){
    result = 'Переменная положительное число';
} else{
    result = 'Переменная отрицательное число';
};
console.log(result);

//Задание 19
// Используя цикл if...else, проверьте является ли переменная number чётным числом. Результат выведите в консоль.
if (number % 2 == 0){
    result = 'Переменная чётное число';
} else{
    result = 'Переменная нечётное число';
};
console.log(result);

//Задание 20
// Используя цикл if...else, проверьте является ли переменная number кратным 3. Результат выведите в консоль.
if (number % 3 == 0){
    result = 'Переменная кратная 3';
} else{
    result = 'Переменная не кратная 3';
};
console.log(result);

//Задание 21
// Используя цикл if...else, проверьте является ли переменная number однозначным. Результат выведите в консоль.
if (number / 1 < 10 ){
    result = 'Переменная однозначное число';
} else{
    result = 'Переменная не однозначное число';
};
console.log(result);

//Задание 22
// Используя цикл if...else, проверьте является ли переменная number двузначным. Результат выведите в консоль.
if (number <= 99 && number >= 10 ){
    result = 'Переменная двузначное число';
} else{
    result = 'Переменная не двузначное число';
};
console.log(result);

//Задание 23
// Используя цикл if...else, проверьте является ли переменная number положительным или нулём. Результат выведите в консоль.
if (number > 0){
    result = 'Переменная положительное число';
} else if(number == 0){
    result = 'Переменная равна 0';
} else {
    result = 'Переменная не положительная и не равна 0';
};
console.log(result);

//Задание 24
// Используя цикл if...else, проверьте является ли переменная number кратным 5 или 7. Результат выведите в консоль.
if (number % 5 == 0){
    result = 'Переменная кратная 5';
} else if(number % 7 == 0){
    result = 'Переменная кратная 7';
};
console.log(result);

//Задание 25
// Используя цикл if...else, проверьте является ли переменная number отрицательным или нулём. Результат выведите в консоль.

if (number < 0){
    console.log('Переменная отрицательная');
} else if(number == 0){
    console.log('Переменная равна 0');
};


//Задание 26
// Используя цикл if...else, проверьте является ли переменная number трёхзначным положительным числом. Результат выведите в консоль.
if (number > 0 && (number / 100 < 10 && number / 100 > 1)){
    console.log('Переменная трёхзначное положительное число');
} else {
    console.log('Переменная не трёхзначное положительное число');
};

//Задание 27
// Используя switch case, напишите программу, которая принимает на вход целое число от 1 до 7 и выводит в консоль название соответствующего дня недели (например, 1 - "Понедельник", 2 - "Вторник" и т.д.).
let dayNumber = 1;
let dayName;

switch (dayNumber) {
    case dayNumber = 1:
    dayName = "Понедельник";
    break;
    case dayNumber = 2:
    dayName = "Вторник";
    break;
    case dayNumber = 3:
    dayName = "Среда";
    break;
    case dayNumber = 4:
    dayName = "Четверг";
    break;
    case dayNumber = 5:
    dayName = "Пятница";
    break;
    case dayNumber = 6:
    dayName = "Суббота";
    break;
    case dayNumber = 7:
    dayName = "Воскресенье";
    break;
}
console.log(dayName);


//Задание 28
// Используя цикл switch case, напишите программу, которая принимает на вход символ направления (N, S, E, W) и выводит в консоль полное название этого направления (N - "Север", S - "Юг", E - "Восток", W - "Запад").

let direction = 'N';
let fullName;

switch (direction) {
    case direction = "W":
    fullName = "Запад";
    break;
    case direction = "N":
    fullName = "Север";
    break;
    case direction = "S":
    fullName = "Юг";
    break;
    case direction = "E":
    fullName = "Восток";
    break;
}
console.log(fullName);




