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
<<<<<<< HEAD
    savings: true,
    chooseExpences: function() {
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
    },
    detectDayBudget: function() {
        appData.moneyPerDay = (appData.budget / 30).toFixed();
    alert('Ежедневный бюджет: ' + appData.moneyPerDay);
    },
    detectLevel: function() {
        if (appData.moneyPerDay < 100) {
            console.log("минимальный уровень достатка");
        }   else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            console.log("средний уровень достатка");
        }   else if (appData.moneyPerDay > 2000) {
            console.log("Высокий уровень достатка");
        }   else {
            console.log("error");
        }
    },
    checkSavings: function() {
        if (appData.savings == true) {
            var save = +prompt('Какова сумма накоплений?', ''),
                percent = +prompt('Под какой процент?', '');
    
                appData.monthIncome = save/100/12*percent;
                alert('Доход в месяц с вашего депозита: ' + appData.monthIncome);
        }
    },
    chooseOptExpenses: function() {
        for (var i = 1; i <= 3; i++) {
            var opt = prompt("Статья необязательных расходов?", "");
            appData.optionalExpences[i] = opt;
        }
    },
    chooseIncome: function() {
        
        var items = prompt("Что принесет дополнительный доход? (Перечислите через запятую)", "");
        
            
        if (typeof(items) != "string" || items == "" || typeof(items) == null) {
            console.log("Вы ввели некорректные данные или не ввели их вовсе");
        }   else    {
            appData.income = items.split(", ");
            appData.income.push(prompt("Может что-то ещё?", ""));
            appData.income.sort();
        }
        
        appData.income.forEach(function(item, i) {
            alert("Способы доп. заработка: " + (i+1) + " - " + item);
        });
    }
};

for (var key in appData) {
    console.log("Наша программа включает в себя данные: " + key + " - " + appData[key]);
}


=======
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
>>>>>>> master
