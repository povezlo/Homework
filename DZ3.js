// # ДЗ 3

/* Вам необходимо самостоятельно решить, для какого задания какой цикл лучше использовать: WHILE, DO WHILE,FOR. */


/* 1. Подсчитать сумму всех чисел в заданном пользователем диапазоне. */


do {
var firstNum = +prompt("Введите первое число");
var secondNum = +prompt("Введите второе число");
}

while(!firstNum || !secondNum);

 
var result = 0;

for(var i = firstNum; i <= secondNum; i++){
   result = result + i; 
}


alert("Сумма всех чисел: " + result);

/* 2. Запросить 2 числа и найти только наибольший общий делитель. */


var a = +prompt('Введите первое число: ');
var b = +prompt('Введите второе число: ');
var result = 0;

if (a == 0)
    result = b;

while (b != 0) {
    if (a > b)
        a = a - b;
    else
        b = b - a;
    }
 result = a;

alert(result);

/* 3.Запросить у пользователя число и вывести все делители этого числа.*/

var num = +prompt("Введите любое число");
var result = [];
for(var i = 0; i <= num; i++){
    
    if(num%i == 0){
        result.push(i);
    }
}

alert(result);

/* 4.Определить количество цифр в введенном числе. */


do {
var num = +prompt("Введите любое число");
}

while(!num);

alert("Количество цифр в числе: " + num.toString().length);

/* 5. Запросить у пользователя 10 чисел и подсчитать, сколько он ввел положительных, отрицательных и нулей. При этом также посчитать, сколько четных и нечетных. Вывести статистику на экран. Учтите, что достаточно одной переменной (не 10) для ввода чисел пользователем. */

var negativeNum = 0,
    positiveNum = 0,
    zero = 0,
    pairsNum = 0,
    unpairsNum = 0;

for(var i = 0; i < 11; i++){
 
  var num = +prompt("Введите любое число")
  
  if(num < 0) 
    
    negativeNum++;
    
  else if(num === 0)
     
    zero++;
    
  else {
    
    positiveNum++;
       
    (num%2 === 0) ? pairsNum++ : unpairsNum++;
  }
  
}

alert("Положительных чисел: " + positiveNum + ". "
      + "Отрицательных чисел: " + negativeNum + ". "
      + "Парных чисел: " + pairsNum + ". "
      + "Непарных чисел: " + unpairsNum + ". "
      + "Нулей: " + zero + ". ");

/* 6. Зациклить калькулятор. Запросить у пользователя 2 числа и знак, решить пример, вывести результат и спросить, хочет ли он решить еще один пример. И так до тех пор, пока пользователь не откажется. */

do{
    var arr = [];
    
    arr[0] = +prompt('Введите первое число: ');
    arr[1] = +prompt('Введите второе число: ');
    arr[2] = prompt('Введите знак: ');
    
        
    if(arr[2] == "+"){
         var sum = arr[0] + arr[1];
    }
    else if(arr[2] == "-"){
        var sum = arr[0] - arr[1];
    }
    else if(arr[2] == "*"){
        var sum = arr[0] * arr[1];
    }
    else {
        var sum = arr[0] / arr[1];
    }
    
    alert("Результат: " + sum);
    
    
    var answer = confirm(" Хотите еще решить пример?");
}
while(answer)

/* 7. Запросить у пользователя число и на сколько цифр его сдвинуть. Сдвинуть цифры числа и вывести результат (если число 123456 сдвинуть на 2 цифры, то получится 345612). */

    do {
var firstNum = prompt("Введите любое число");
var secondNum = prompt("На сколько цифр его сдвинуть");
}

while(!firstNum || !secondNum);
    
var arr = firstNum.split("");
var arr2 = [];

for(var i = 0; i < arr.length; i++){
    arr2.push(+arr[i] + +secondNum);
}

alert(arr2);

/* 8. Зациклить вывод дней недели таким образом: «День недели. Хотите увидеть следующий день?» и так до тех пор, пока пользователь нажимает OK. */

do {
var days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday"
    ];


for(var i = 0; i < days.length; i++){
    var answer = confirm(days[i] + " Хотите увидеть следующий день?");
    
    if(!answer)
        break;
}
}
while(answer)

/*  9. Вывести таблицу умножения для всех чисел от 2 до 9. Каждое число необходимо умножить на числа от 1 до 10. */


var array = [];

for(var i = 2; i <= 9; i++) {
    var array2 = [];
    for(var j = 1; j <= 10; j++) {
        array2[j] = i*j;
    }
    array[i] = array2;
}

console.table(array);

/* 10. Игра «Угадай число». Предложить пользователю загадать число от 0 до 100 и отгадать его следующим способом:
каждую итерацию цикла делите диапазон чисел пополам, записываете результат в N и спрашиваете у пользователя «Ваше число > N, < N или == N?». В зависимости от того, что указал пользователь, уменьшаете диапазон. Начальный диапазон от 0 до 100, поделили пополам и получили 50.
Если пользователь указал, что его число > 50, то изменили диапазон на от 51 до 100. И так до тех пор, пока пользователь не выберет == N. */

alert("Вам нужно загадать число от 0 до 100, а я попробую его угадать");


    var questions = 7;
    var value = 50;
    var bottomNum = 0;
    var topNum = 100;

    while(questions--)
    {
        
       var answer = confirm("Ваше число " + Math.round(value) + " ? ");
        
        if(answer) {
            break;
        
        }
        
       var answer = confirm("Ваше число больше " + Math.round(value) + " ? ");

        if(answer)  {
            bottomNum = value;
            value = bottomNum + (topNum - bottomNum)/2;          
        }
        else  {
            topNum = value;
            value = bottomNum + (topNum - bottomNum)/2;
        }
        
        if(topNum - bottomNum == 1) {
            value = bottomNum + 1;
            break;
        }
    }
    alert("Ваш номер " + Math.round(value));











