//Дан массив состоящий из названий фильмов, выполните перебор массива с выводом в консоль названия каждого фильма

let films = ["King Artur", "Fight Club"];
// alert(films)

//Дан массив производителей автомобилей, преобразовать массив в строку и обратно в массив

let cars = ['Toyota'];
let to_string = cars.join(',')
let arr = cars.join(',').split('')


//Дан массив имен ваших знакомых, добавить к каждому элементу массива слова hello

let my_friends = ['Jor','Artur'];
let new_word = my_friends.map(my_function)
function my_function(word){
    return 'Hello ' + word;
}


//Преобразовать числовой массив в Boolean

let arry = [0, 1, 5, 0, 128];
for(let i = 0; i < arr.length; i++) {
    if(arry[i] == 0) {
        arry[i] = false;
        continue;
    }
    arry[i] = true;
}



//Отсортировать массив [1,6,7,8,3,4,5,6] по убыванию

let a = [1,6,7,8,3,4,5,6];

let sorted_ary = a.sort().reverse();


//Отфильтровать массив [1,6,7,8,3,4,5,6] по значению >3

let b = [1,6,7,8,3,4,5,6];
let x = b.filter(function(num) {
    return num > 3;
});


//Написать функцию, которая принимает два параметра - массив и число и выводит индекс элемента массива равный числу

function y(arr, number) {
    for(let i = 0; i < arr.length; i++){
        if(arr[i] === number){
            return i
        }
    }
    return 'number is not exist in arr'
}
//Реализовать цикл, который будет выводить число а, пока оно не станет меньше 10
let ab = 25;
while(ab >= 10){
   // console.log(ab)
    ab = ab - 1
}

//Реализовать цикл, который выводит в консоль простые числа

