var money, time;

function start() {
    money = +prompt('Ваш бюджет на этот месяц', '');
    time = prompt('Введите дату в формате YYYY-MM-DD', '');
    
    
    while (isNaN(money) || money == "" || money == null) {
        money = +prompt('Ваш бюджет на этот месяц', ''); 
    }
} 

start();

var appData = {
    budget: money,
    expences: {},
    optionalExpences: {},
    income: [],
    timeData: time,
    savings: true
};

function chooseExpences() {
    for(var i = 0; i<2; i++) {
        var a = prompt('Введите обязательную статью разходов в этом месяце', ''),
            b = prompt('Во сколько обойдется?', '');
        if ((typeof(a)==='string') && (typeof(a))!= null && (typeof(b))!= null && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expences[a] = b;
        }   else {
            console.log ("bad result");
            i = i - 1;
        }
    }
}

chooseExpences();

function detectDayBudget() {
    appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert('Ежедневный бюджет: ' + appData.moneyPerDay);
}

detectDayBudget();

function detectLevel() {
    if (appData.moneyPerDay < 100) {
        console.log("минимальный уровень достатка");
    }   else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
        console.log("средний уровень достатка");
    }   else if (appData.moneyPerDay > 2000) {
        console.log("Высокий уровень достатка");
    }   else {
        console.log("error");
    }
}

detectLevel();

function checkSavings () {
    if (appData.savings == true) {
        var save = +prompt('Какова сумма накоплений?', ''),
            percent = +prompt('Под какой процент?', '');

            appData.monthIncome = save/100/12*percent;
            alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
    }
}

checkSavings();

function chooseOptExpenses() {
    for (var i = 1; i <= 3; i++) {
        var questionOptExpenses = prompt("Статья необязательных расходов?");
        appData.optionalExpenses[i] = questionOptExpenses;
        console.log(optionalExpences);
    }
}

chooseOptExpenses();