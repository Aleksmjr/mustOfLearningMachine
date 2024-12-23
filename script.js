let isNumber = function (n) {
  return !isNaN(parseFloat(n)) && isFinite(n);
};

let moneys,
  start = function () {
    moneys = prompt('Ваш месячный доход?');

    while (!isNumber(moneys)) {
      moneys = prompt('Ваш месячный доход?');
    }
  };
start();

let appData = {
  budget: { moneys },
  budgetDay: 0,
  budgetMonth: 0,
  expensesMonth: 0,
  income: {},
  addIncome: {},
  expenses: {},
  addExpenses: [],
  deposit: false,
  mission: 200000,
  // разобраться с этим говном
  asking: function () {
    let addExpenses = prompt(
      'Перечислите возможные расходы за рассчитываемый период через запятую',
    );
    appData.addExpenses = addExpenses.toLowerCase().split(',');
    appData.deposit = confirm('Есть ли у вас депозит в банке?');
    // цикл на 2 вопроса
    for (let i = 0; i < 2; i++) {
      // присваиваем i-тому(0 и 1) (итерация) i-ому элементу массива expens ответ на prompt - обязательные статьи расходов
      let expenseName = prompt(
        'Введите обязательную статью расходов?',
        'Садик',
      );
      let expenseCost;
      do {
        //переменной sum присвается рез-тат prompt
        expenseCost = +prompt('Во сколько это обойдется?');
        //В данном случае, если sum = число, нам вернется !true(false) и условие НЕ ВЫПОЛНИТСЯ. Если sum = не число, нам вернется !false (true) и условие ВЫПОЛНИТСЯ
        if (!isNumber(expenseCost)) {
          confirm('Ввод отменён');
        }
      } while (!isNumber(expenseCost));
      appData.expenses[expenseName] = expenseCost;
    }
    return appData.expenses;
  },
  // высчитываем доход (зп - расходы)
  getBudget: function (moneys, expensesMonth) {
    return moneys - expensesMonth;
  },
  // если число положительное, то цель будет достигнута за опр. кол-во месяцев = сумме цели / доход в месяц
  getTargetMonth: function (mission, budgetMonth) {
    let targetMission = mission / budgetMonth;
    if (targetMission < 0) {
      alert('Цель не будет достигнута');
    } else {
      alert('Цель будет достигнута');
    }
    return targetMission;
  },
  // определяем, насколько хороша наша зп в день
  getStatusIncome: function () {
    if (budgetDay >= 1200) {
      return 'У вас высокий уровень дохода';
    }
    if (budgetDay >= 600 && budgetDay < 1200) {
      return 'У вас средний уровень дохода';
    }
    if (budgetDay >= 0 && budgetDay < 600) {
      return 'К сожалению, ваш уровень дохода ниже среднего';
    }
    if (budgetDay < 0) {
      return 'Что-то пошло не так, возможно вы ввели не те значения, попробуйте еще раз';
    }
  },
};
// вызвали фукнцию, которая определенна в обьекте
appData.asking();

// сумма обязательных расходов за месяц(перезаписал нулевое значение)
// expensesMonth = Object.values(appData.expenses).reduce(
//   (sum, cost) => sum + cost,
//   0,
// );
// сумма обязательных расходов за месяц(перезаписал нулевое значение) ЧЕРЕЗ FOR IN
for (let key in appData.expenses) {
  if (appData.expenses.hasOwnProperty(key)) {
    appData.expensesMonth = appData.expensesMonth + appData.expenses[key];
  }
}
console.log('Расходы за месяц: ' + appData.expensesMonth);

// месячный доход (наша зп - расходы) снова перезаписал нулевое значение && monyh budget = my budget for month - expenses
appData.budgetMonth = moneys - appData.expensesMonth;

// let mission = 200000; - за сколько месяцев достигнем цели? цель / месячный доход
let tagetSums = appData.getTargetMonth(appData.mission, appData.budgetMonth);
console.log(`Цель будет достигнута за ${Math.round(tagetSums)} месяц/ев`);

// money per day (month / how day in month?)
budgetDay = appData.budgetMonth / 30;
console.log(
  `Ваши деньги за день с учетом расходов = ${Math.round(budgetDay)} руб.`,
);
console.log(`${appData.getStatusIncome()}`);

//работаем с обьектами, с помощью фор ин перебираем обьекты и выводим все свойства обьекта АппДата
for (let key in appData)
  if (appData.hasOwnProperty(key)) {
    console.log(`Наша программа включает в себя: ${key} = ${appData[key]}`);
  }
