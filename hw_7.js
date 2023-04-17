const  reg = 'js';

console.log(reg.toUpperCase());

const animals = ['Кошка', 'Кит', 'Комар', 'Носорог','кот'];
const search = 'ко';

products.forEach((animals) => {
	if (animals.toLowerCase().startsWith(search.toLowerCase())) {
		console.log(animals);
	}
});

x = Math.round()
x = Math.floor()
x = Math.ceil()


let myArr = [ 52, 53, 49, 77, 21, 32 ];
min = myArr[0];
max = min;
for (i = 1; i < myArr.length; ++i) {
    if (myArr[i] > max) max = myArr[i];
    if (myArr[i] < min) min = myArr[i];
}


function getRandomInt(minValue,maxValue) {
    return Math.round(Math.random() * maxValue);}
console.log(getRandomInt(0, 10));

const giveMeRandom = function(n) {
    let arrWithNums = [];
    for(i = 0; i < n.length; i++) {
        return arrWithNums.push(Math.floor(Math.random() * 10)); 
    }
    return arrWithNums;
}
console.log(giveMeRandom(4));

//let myDate = new Date("4/17/2023");
console.log.write(myDate);
//

function randomInteger(min, max) {
    let ran = min + Math.random() * (max + 1 - min);
    return Math.floor(ran);
  }
  
  alert( randomInteger(1, 8) );

  let date = new Date("2023-04-18");
alert(date);


const days = ["Воскресенье", "Понедельник", "Вторник", "Среда", "Четверг", "Пятница", "Суббота"];
const months = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
"Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
let hour = myDate.getHours();
let minute = myDate.getMinutes(); 
let second = myDate.getSeconds

let myDate = new Date();
let fullDate = "Сегодня: " + myDate.getDate() + 
" " + months[myDate.getMonth()] + 
" " + myDate.getFullYear() + 
", " + days[myDate.getDay()];
console.log(fullDate);
console.log(hour + ":" + minute + ":" + second);