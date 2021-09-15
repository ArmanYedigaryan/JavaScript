let car = {
    color : 'черный'
}
//  Изменить свойство color объекта car на 'зеленый'
car.color =  'зеленый'
//       В объект car добавить свойство power, которое является функцией и выводит в консоль мощность двигателя
car.power = function() {
    console.log =  "240hp"
}

//На склад принимают груши и яблоки, напишите функцию, которая возвращает результат сложения количества принятых груш и яблок

function sum(apple, pear) {
    return apple + pear;
}
//В терминале оплаты сохранено ваше имя, напишите функцию для определения имени в терминале(если вы ввели ваше имя, то привет + имя, если нет, то нет такого имени)

function defineName(name){
    let x = prompt("What is your name");
    if (x === name){
        alert("Hi" + x);
    }else alert("not this name");
}

//Напишите функцию вычисления типа аргумента и вывод типа в консоль

function define(x){
    console.log(typeof x)
}

// Напишите функцию, которая определяет является ли число простым или нет

function number(x){
    for (i=2;i<x-1;i++){
        if(x%i===0){
            return "x is a prime number"
        }
    }
    return "x is a prime number"
}