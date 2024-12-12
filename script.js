let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let income = 'фриланс';
let moneys;
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

// console.log(money);
// console.log(typeof money);

// add promt 'your expenses' and save in variable
let addExpenses = prompt(
  'Перечислите возможные расходы за рассчитываемый период через запятую',
);
console.log(addExpenses);

// add promt 'your deposit' and set boolean value
let deposit = confirm('Есть ли у вас депозит в банке?');

let start = function () {
  moneys = prompt('Ваш месячный доход?');

  while (!isNumber(moneys)) {
    moneys = prompt('Ваш месячный доход?');
  }
};
start();

console.log(deposit); // WE CAN ADDED let deposit1
let showTypeOf = function (data) {
  console.log(data, typeof data);
};
showTypeOf(moneys);
showTypeOf(income);
showTypeOf(deposit);

//ask all questions twice

// let expenses1 = prompt('Введите обязательную статью расходов');
// let expenses2 = prompt('Введите обязательную статью расходов');
// let amount1 = Number(prompt('Во сколько это обойдется?'));
// let amount2 = Number(prompt('Во сколько это обойдется?'));
// console.log(amount1, amount2);

// var array1 = (amount1 && '').split('');
// var array2 = (amount2 && '').split('');
// console.log(amount1, amount2);
// DELETED LET = BudgetMonth

// calc mission 'how many month u need to completed your mission'
// let budgetMission = Math.ceil(mission / budgetMonth);

// console.log(`До накопления средств необходимо ${budgetMission} месяца/ев`);

// change budgetDay, becase we know budgetMonth
// let budgetDay = Math.floor(budgetMonth / 30);
// console.log(budgetDay);

// construction of conditions
let expens = [];
// Function return all sums (or cums in your throath :D)
let getExpensesMonth = function () {
  let sum;
  let totalSum = 0;
  // цикл на 2 вопроса
  for (let i = 0; i < 2; i++) {
    // присваиваем i-тому(0 и 1) (итерация) i-ому элементу массива expens ответ на prompt - обязательные статьи расходов
    expens[i] = prompt('Введите обязательную статью расходов?', 'Садик');
    do {
      //переменной sum присвается рез-тат prompt
      sum = +prompt('Во сколько это обойдется?');
      //В данном случае, если sum = число, нам вернется !true(false) и условие НЕ ВЫПОЛНИТСЯ. Если sum = не число, нам вернется !false (true) и условие ВЫПОЛНИТСЯ
      if (!isNumber(sum)) {
        confirm('Ввод отменён');
      }
    } while (!isNumber(sum));
    totalSum = totalSum + sum;
  }
  return totalSum;
};
console.log(expens);
let expensesAmount = getExpensesMonth();
console.log('Расходы за месяц: ' + expensesAmount);
// your money for month - incomes?
function getAccumulatedMonth(budget, expensesAmount) {
  return budget - expensesAmount;
}

// added func in variable
let accumulatedMonth = getAccumulatedMonth(moneys, expensesAmount);
//
// let mission = 200000; - цель заработать бабки
// accumulatedMonth - доход в месяц
// функция геттаргетманф расчитывает нам, за сколько месяцев будет достигнута цель и если ответ положительный, то выдает нам модалку с положительнымо ответом, при отрицалове, с отрицательным ответом
function getTargetMonth(a, b) {
  let haha = a / b;
  if (haha < 0) {
    alert('Цель не будет достигнута');
  } else {
    alert('Цель будет достигнута');
  }
}
tagetSums = getTargetMonth(mission, accumulatedMonth);
console.log(tagetSums);

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
