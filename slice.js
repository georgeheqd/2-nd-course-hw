/*1*/
let str = "hello";
let c = 'l';
console.log(str.split(c).length - 1);
/*2*/
function squareSum(numbers) {
    let sum = 0
    for( let i = 0; i < numbers.length; i++) {
        sum += numbers[i] **2
    }
    return sum
}
/*3*/

/*4*/
function solution(str) {
    let newStr = ""
    for(let i = str.length - 1; i >= 0; i--) {
        newStr +=str[i]
    }
    return newStr
}
/*5*/
function nameLength(str) {
    const words = str.split(" ");
    return words.map(str => `${str} ${str.length}`);
}
console.log(nameLength(""));
/*6*/
/*7*/
/*8*/
function invert(array) {
    let invert = [];
    for(let i = 0; i < array.length; i++){
      if(array[i] > 0){
        invert.push(array[i] - (array[i] * 2));
      }
      
      if(array[i] < 0){
        invert.push(Math.abs(array[i]));
      }
  
      if(array[i] == 0){
        invert.push(-0);
      }
    }
    return invert;
  }