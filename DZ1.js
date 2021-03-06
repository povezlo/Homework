/* #ДЗ 1

 Запрашивать данные у пользователя необходимо с помощью prompt(), а выводить результат с помощью console.log() или  .textContent(). */

/* 1. Запросите у пользователя его имя и выведите в ответ: «Привет, его имя!». */

var name = prompt("Как вас зовут?");

console.log("Привет, " + name);


/* 2. Запросите у пользователя год его рождения, посчитайте, сколько ему лет и выведите результат. Текущий год укажите в коде как константу.  */


do {
    var years = +prompt("Введите год своего рождения");
}

while (!years)
    
const CURRENT_YEARS = 2019;

var age = CURRENT_YEARS - years;

console.log("Ваш возраст: " + age);
        

/* 3. Запросите у пользователя длину стороны квадрата и выведите периметр такого квадрата. */


do {
    var answer = +prompt("Введите длину стороны квадрата");
}

while (!answer)


var result = answer * 4;

console.log("Периметр квадрата равна: " + result);


/* 4. Запросите у пользователя радиус окружности и выведите площадь такой окружности. */


do {
    var answer = +prompt("Введите радиус окружности");
}

while (!answer)


var result = answer * answer * Math.PI;

console.log("Площадь окружности равна: " + result);


/* 5. Запросите у пользователя расстояние в км между двумя городами и за сколько часов он хочет добраться. Посчитайте скорость, с которой необходимо двигаться, чтобы успеть вовремя. */


do {
    var way = +prompt("Введите расстояние в км между двумя городами");
    var time = +prompt("Введите за сколько часов вы хотите туда добраться");
}

while (!way || !time)
    
var speed = way / time;


    
console.log("Чтобы успеть вовремя, вам необходимо двигаться со скоростью: " + Math.floor(speed) + " км/ч");   


/* 6. Реализуйте конвертор валют. Пользователь вводит доллары, программа переводит в евро. Курс валюты храните в константе. */

do {
    var dollar = +prompt("Введите сумму долларов");
}

while (!dollar)
    
const EURO = dollar * 0.88;

console.log(dollar + " долларов = " + EURO + " евро");


/* 7. Пользователь указывает объем флешки в Гб. Программа должна посчитать сколько файлов размером в 820 Мб помещается на флешку. */

do {
    var memory = +prompt("Введите объем флешки в Гб");
}

while (!memory)
    
var sum = Math.floor(memory * 1024 / 820)

console.log("На вашу флешку поместится " + sum + " файлов размером 820 Мб");


/* 8. Пользователь вводит сумму денег в кошельке и цену одной шоколадки. Программа выводит сколько шоколадок может купить пользователь и сколько сдачи у него останется. */

do {
    var cash = +prompt("Введите сумму денег в кошельке");
    var price = +prompt("Введите цену одной шоколадки");
}

while (!cash || !price)

var sum = Math.floor(cash / price);
var change = cash % price;

console.log("Количество шоколадок, которые вы можете купить: " + sum + ". Ваша сдача: " + change);


/* 9. Запросите у пользователя трехзначное число и выведите его задом наперед. Для решения задачи вам понадобится оператор % (остаток от деления). */


do {
    var num = prompt("Введите трехзначное число");
}

while (!num || num.toString().length !== 3);

var a = Math.floor((num / 100) % 10) + "";
var b = Math.floor((num / 10) % 10) + "";
var c = Math.floor(num % 10) + "";
console.log(c + b + a);


/* 10. Запросите у пользователя целое число и выведите в ответ, четное число или нет. В задании используйте логические операторы. В задании не надо использовать if или switch */

do {
    var x = +prompt("Введите целое число");
}

while (!x)

var num = x % 2; 

var proof = (num > 0) && "нечетное" || (num == 0) && "четное";
    
console.log("Ваше число " + proof );          



















