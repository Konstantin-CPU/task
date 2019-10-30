var money = +prompt('Ваш бюджет на этот месяц', ''),
    time = prompt('Введите дату в формате YYYY-MM-DD', '');

var appData = {
    budget: money,
    expences: {},
    optionalExpences: {},
    income: [],
    timeData: time,
    savings: false
};

for(var i = 0; i<2; i++) {
    var a = prompt('Введите обязательную статью разходов в этом месяце', ''),
        b = prompt('Во сколько обойдется?', '');
    if ((typeof(a)==='string') && (typeof(a))!= null && (typeof(b))!= null && a != '' && b != '' && a.length < 50) {
        console.log("done");
        appData.expences[a] = b;
    }
}

appData.moneyPerDay = appData.budget / 30;


alert('Ежедневный бюджет: ' + appData.moneyPerDay);

if (appData.moneyPerDay < 100) {
    console.log("минимальный уровень достатка");
}   else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
    console.log("средний уровень достатка");
}   else if (appData.moneyPerDay > 2000) {
    console.log("Высокий уровень достатка");
}   else {
    console.log("error");
}