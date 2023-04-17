/*const numbs = [1, 5, 4, 10, 0, 3];


for (let i = 0; i < numbs.length; i++) {
	console.log(numbs[i]);
	if (numbs[i] == 10) break;
}

const numbs = [1, 5, 4, 10, 0, 3];
console.log(numbs[4]);

let greetings = [1, 3, 5, 10, 20];
greetings = greetings.join('');

console.log(greetings);

let arr = [];

for (let i = 0; i < 1; i++) {
	arr[i] = [];
	
	for (let j = 0; j < 1; j++) {
		arr[i].push(j + 1);
	}
}

console.log(arr);

let numbs = [1, 1, 1];
numbs.push(2, 2, 2);
console.log(numbs);

let numbs = [9, 8, 7, 'a', 6, 5];
numbs.sort()
numbs.pop()
numbs.splice(1, 1);
alert(numbs);

const num = prompt('Введите число');

const salary = [9, 8, 7, 6, 5];

search = salary.includes(prompt);
s
console.log(search);

let str="abcdef";
let res="";
for(let i = str.length; i>0; i--) {
  res+=str[i-1];
}

let nums = [[1, 2, 3,],[4, 5, 6]];
let newNums = []
for (let item of nums) {
	newNums.flat()
}
console.log(item);

*/
const arr = [2, 5, 8, 4, 10, 1, 7, 3, 9, 6]; // создаём массив с произвольными числами

for (let i = 0; i < arr.length - 1; i++) {
 const sum = arr[i] + arr[i + 1];
 console.log(sum); // выводим в консоль сумму текущего и следующего элементов
}

console.log(num([5,2,7])); 
 
function num(arr){

  return arr.map(Math.pow);
}

function getNegativeNumbers(array) {
	return array.filter(number => number < 0);
   }
   
   // Пример использования функции
   const numbers = [-2, 3, -5, 7, -8, 10];
   const negativeNumbers = getNegativeNumbers(numbers);
   console.log(negativeNumbers); // [-2, -5, -8]


let nameLength = ["Дом", "ЕЛЬ", "вода", "сводить", "Медведь12"]
function nameLength(str) {
    const words = str.split(" ");
    return words.map(str => `${str} ${str.length}`);
}

console.log(nameLength());
