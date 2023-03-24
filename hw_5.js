/*
const user = {
	name: 'Артем',
	age: 23,
	city: 'Москва',

	getInfo() {
		return 'Пользователь ${user.name}, возраст ${user.age}, проживает в ${user.city}';	
	}
};

console.log(user.getInfo());


function getRectangleArea() {
    return this.width * this.height;
  }
  function getRectanglePerimeter() {
    return this.width * 2 + this.height * 2;
  }
  
  const square1 = {
    width: 4,
    height: 5,
  
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
  };
  
  const square2 = {
    width: 7,
    height: 3,
  
    getArea: getRectangleArea,
    getPerimeter: getRectanglePerimeter,
  };
  
  console.log(square1.getArea());
  console.log(square1.getPerimeter());
  console.log(square2.getArea());
  console.log(square2.getPerimeter());
  */
 function comp(a, b) {
    if (a > b) {
        return a;
    }
    else if (a < b) {
        return b;
    }
    else if (a == b) {
        return a || b;
    }
 };

 let a = prompt('Число');
 let b = prompt('Число');


 console.log(comp());

 "use strict";
let numb = prompt("Число");

let printMessage;

if (numb % 2 == 0) {

    printMessage = function () {
        console.log("Четное");
    }

} else {

    printMessage = function () {
        console.log("Нечетное");
    }

}