// let money = 45000;

let income = 'фриланс';

let addExpenses1 = 'Интернет, такси, коммуналка';

let deposit1 = true;

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
let expenses = arr.split(', ');
console.log(expenses);
// вывод дневного дохода

// add promt 'your income' and save in variable
let money = prompt('Ваш месячный доход?');
console.log(money);
// add promt 'your expenses' and save in variable
let addExpenses = prompt(
  'Перечислите возможные расходы за рассчитываемый период через запятую',
);
console.log(addExpenses);
// add promt 'your deposit' and set boolean value
let deposit = Boolean(prompt('Есть ли у вас депозит в банке?'));
console.log(deposit); // WE CAN ADDED let deposit1
//ask all questions twice
let expenses1 = prompt('Введите обязательную статью расходов');
let expenses2 = prompt('Введите обязательную статью расходов');
let amount1 = Number(prompt('Во сколько это обойдется?'));
let amount2 = Number(prompt('Во сколько это обойдется?'));
console.log(expenses1, expenses2, amount1, amount2);
// Calculate your income for mounth
let budgetMonth = money - (amount1 + amount2);
console.log('Ваш бюджет на месяц:', budgetMonth);
// calc mission 'how many month u need to completed your mission'
let budgetMission = mission / budgetMonth;
console.log(
  `До накопления средств необходимо ${Math.ceil(budgetMission)} месяца/ев`,
);
// change budgetDay, becase we know budgetMonth
let budgetDay = budgetMonth / 30;
console.log(Math.floor(budgetDay));
// construction of conditions
if (budgetDay > 1200) {
  console.log('У вас высокий уровень дохода');
} else if (600 < budgetDay && budgetDay < 1200) {
  console.log('У вас средний уровень дохода');
} else if (600 > budgetDay && budgetDay > 0) {
  console.log('К сожалению у вас уровень дохода ниже среднего');
} else if (budgetDay < 0) {
  console.log(
    'Что-то пошло не так, возможно вы ввели не те значения, попробуйте еще раз',
  );
}
// HARDMODE
