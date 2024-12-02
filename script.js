let money = 45000;

let income = 'фриланс';

let addExpenses = 'Интернет, такси, коммуналка';

let deposit = true;

let mission = 200000;

let period = 12;
// Вывод типа данных
console.log(typeof money);
console.log(typeof income);
console.log(typeof deposit);
//вывод длины строки
console.log(addExpenses.length);
//Вывод в консоль строку
console.log(
  `Период равен ${period} месяцев, цель заработать ${mission} рублей`,
);
//Нижний регистр, разбить на массив и вывел в консоль
let arr = addExpenses.toLowerCase();
let expenses = arr.split(' ');
console.log(expenses);
// вывод дневного дохода
let budgetDay = money / 30;
console.log(budgetDay);
