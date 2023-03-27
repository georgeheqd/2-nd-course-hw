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
    if (a => b) {
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


 console.log(comp(a, b));


let numb = prompt("Число");

function checkNumber(num) {
     
  if (numb % 2 == 0) {
          console.log("Четное");
  } else {
          console.log("Нечетое");
  }
}

checkNumber(promt("Число"))

function welcome(age){
  if (age <= 0) {
	    alert("Вы ввели неправильное значение!");
  } else if (age <= 12) {
	    alert("Привет, друг!");
  } else {
	    alert("Добро пожаловать!");
}
}
let age = prompt("Сколько Вам лет?", 18);

welcome(age);

    function func(num) {
        return num ** 2;
    }
    function func(num) {
        console.log(num ** 2);
    }

const circle1 = {
  radius: 5,
  pi: 4.14,
  /*getArea: getRectangleArea,*/
  getArea:circle1.getArea(),
  getPerimeter:circle1.getPerimeter()
  /*getPerimeter: getRectanglePerimeter,*/

}

function getRectangleArea() {
	console.log(this.radius * this.pi);
}
circle1.getRectangleArea()

function getRectanglePerimeter() {
	console.log(2 * this.radius + this.pi);
}
circle1.getRectanglePerimeter()


function checkNumbers(firtsNum, secondNum){
  if ((checkNumbers) === isNaN ) {
    alert(this.firtsNum + this.secondNum);
  }
  else if (checkNumbers === String ) {
    alert('${firtsNum} + ${secondNum}');
  }
  else if (checkNumbers != Number ) {
    alert("Одно или оба значения не являются числом")
  }
}

checkNumbers(1,2)

checkNumbers('1', 'hello')


let n = prompt('Число');

function cubeNumber(number){
  const result = math.pow(number, 3)

  return `n в кубе равняется ${result}` 
}
cubeNumber(n)