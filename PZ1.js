// #ПЗ 1

/* 1. Запросите у пользователя число, возведите это число в 3-ю степень и выведите на экран  */

do {
    var answer = prompt("Введите любое число");
}

while (isNaN(answer) || !answer)


var result = answer * answer * answer;

alert(answer + " в третей степени будет: " + result);


/* 2. Запросите у пользователя 2 числа и выведите среднее арифметическое этих чисел.  */

do {
    var a = +prompt("Введите первое число");
    var b = +prompt("Введите второе число");
}

while (!a || !b)

var result = (a + b) / 2;

alert("Среднее арифметическое число: " + result);


/* 3. Запросите у пользователя длину стороны квадрата и выведите площадь такого квадрата.  */

do {
    var answer = +prompt("Введите длину стороны квадрата");
}

while (!answer)


var result = answer * answer;

alert("Площадь квадрата равна: " + result);


/* 4. Реализуйте конвертор из километров в мили. 1 км = 0,621371 миль. Это значение укажите в коде как константу.  */


do {
    var answer = +prompt("Введите любое число");
}

while (!answer)

const MILJA = 0.621371;

alert(answer + " км равно " + MILJA * answer + " миль");


/* 5. Реализуйте калькулятор. Пользователь вводит два числа, а программа выводит результаты действий + - * / с этими числами.  */

do {
    var a = +prompt("Введите первое число");
    var b = +prompt("Введите второе число");
}

while (!a || !b)

alert(a + " + " + b + " = " + (a + b) + ";  " +
    a + " - " + b + " = " + (a - b) + ";  " +
    a + " / " + b + " = " + (a / b) + ";  " +
    a + " * " + b + " = " + (a * b));


/* 6. Пользователь вводит значения a и b для формулы a*x+b=0, а программа считает и выводит значение x. */

do {
    alert("Введите значения a и b для формулы a * x + b = 0, а программа выведит значение x");
    var a = +prompt("Введите первое число");
    var b = +prompt("Введите второе число");
}

while (!a || !b)

var x = b / a * -1;

alert("x = " + x);



/* 7. Запросите у пользователя текущее время (часы и минуты) и выведите, сколько часов и минут осталось до следующего дня. */

do {
    var hours = prompt("Введите сколько сейчас часов");
    var minutes = prompt("Введите сколько сейчас минут");
}

while (isNaN(hours) || isNaN(minutes) || !hours || !minutes)

var times = 24 * 60 - (hours * 60 + minutes * 1);
var hoursRest = Math.floor(times / 60);
var minutesRest = times % 60;

alert("До конца дня осталось " + hoursRest + " часов " + minutesRest + " минут");


/* 8. Запросите у пользователя трехзначное число и выведите вторую цифру этого числа. Для решения задачи используйте оператор % (остаток от деления). */

do {
    var num = prompt("Введите трехзначное число");
}

while (!num || num.toString().length !== 3);

var a = Math.floor((num / 10) % 10);

alert(a);



/* 9. Запросите у пользователя пятизначное число и переместите последнюю цифру в начало (из числа 12345 должно получиться число 51234). */

do {
    var num = prompt("Введите пятизначное число");
}

while (!num || num.toString().length !== 5)

var arr = num.toString().split('');

var a = arr.pop();
arr.unshift(a);

alert(arr);


/* 10. Зарплата работника составляет $250 + 10% от продаж. Запросите общую сумму продаж за месяц и посчитайте зарплату. */


do {
    var totalSale = +prompt("Введите общую сумму продаж за месяц");
}

while (!answer)

var salary = 250;

var totalSalary = totalSale * 0.1 + salary;


alert("Ваша зарплата за этот месяц состaвляет: " + totalSalary + " $");


