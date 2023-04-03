/*const numbs = [1, 5, 4, 10, 0, 3];


for (let i = 0; i < numbs.length; i++) {
	if (numbs[i] == 10) break;
	console.log(numbs[i]);
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
numbs.push('2, 2, 2');
console.log(numbs);

let numbs = [9, 8, 7, 'a', 6, 5];
numbs = numbs.sort
numbs.splice(1, 1);
alert(numbs);

prompt('Число')

const salary = [9, 8, 7, 6, 5];

search = salary.includes(prompt);

console.log(search);

let str="abcdef";
let res="";
for(let i = str.length; i>0; i--) {
  res+=str[i-1];
}

let nums = [[1, 2, 3,],[4, 5, 6]];
let newNums = []
for (let item of nums) {
	console.log(item);
}
*/

const arr = [20, 50, 100];

const iterator = arr.keys();

const sum = [];

for (let key of iterator) {
	sum.push(key);
}
console.log('', sum.reduce((a, b) => a + b));
