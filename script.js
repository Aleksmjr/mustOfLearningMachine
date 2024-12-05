let income = 'фриланс';

let addExpenses1 = 'Интернет, такси, коммуналка';

let deposit1 = true;

let mission = 200000;

let period = 12;
// Вывод типа данных

console.log(typeof income);

//Вывод в консоль строку
// console.log(
//   `Период равен ${period} месяцев, цель заработать ${mission} рублей`,
// );

//Нижний регистр, разбить на массив и вывел в консоль
let arr = addExpenses1.toLowerCase();
let expenses = arr.split(', ');
// console.log(expenses);
// вывод длины строки
// console.log(addExpenses1.length);

// add promt 'your income' and save in variable
let money = prompt('Ваш месячный доход?');
// console.log(money);
console.log(typeof money);

// add promt 'your expenses' and save in variable
let addExpenses = prompt(
  'Перечислите возможные расходы за рассчитываемый период через запятую',
);
console.log(addExpenses);

// add promt 'your deposit' and set boolean value
let deposit = confirm('Есть ли у вас депозит в банке?');
console.log(deposit); // WE CAN ADDED let deposit1
let showTypeOf = function (data) {
  console.log(data, typeof data);
};
showTypeOf(money);
showTypeOf(income);
showTypeOf(deposit);

//ask all questions twice

let expenses1 = prompt('Введите обязательную статью расходов');
let expenses2 = prompt('Введите обязательную статью расходов');
let amount1 = Number(prompt('Во сколько это обойдется?'));
let amount2 = Number(prompt('Во сколько это обойдется?'));
console.log(amount1, amount2);

var array1 = (amount1 && '').split('');
var array2 = (amount2 && '').split('');
console.log(amount1, amount2);
// DELETED LET = BudgetMonth

// calc mission 'how many month u need to completed your mission'
// let budgetMission = Math.ceil(mission / budgetMonth);

// console.log(`До накопления средств необходимо ${budgetMission} месяца/ев`);

// change budgetDay, becase we know budgetMonth
// let budgetDay = Math.floor(budgetMonth / 30);
// console.log(budgetDay);

// construction of conditions

// Function return all sums (or cums in your throath :D)
function getExpensesMonth(exp1, exp2) {
  return exp1 + exp2;
}

// your money for month - incomes?
function getAccumulatedMonth(budget, exp1, exp2) {
  return budget - getExpensesMonth(exp1, exp2);
}

// added func in variable
let accumulatedMonth = getAccumulatedMonth(money, amount1, amount2);
//
function getTargetMonth(target, incomePerMonth) {
  return target / incomePerMonth;
}
console.log(getTargetMonth(mission, accumulatedMonth));

let budgetDay = accumulatedMonth / 30;
console.log(budgetDay);
//HARDMODE
let getStatusIncome = function () {
  if (budgetDay >= 1200) {
    return 'У вас высокий уровень дохода';
  }
  if (600 <= budgetDay < 1200) {
    return 'У вас средний уровень дохода';
  }
  if (600 > budgetDay >= 0) {
    return 'К сожалению у вас уровень дохода ниже среднего';
  }
  if (budgetDay < 0) {
    return 'Что-то пошло не так, возможно вы ввели не те значения, попробуйте еще раз';
  }
};
console.log(getStatusIncome());
