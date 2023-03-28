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
  getArea: getRectangleArea,
  getPerimeter: getRectanglePerimeter,

}
circle1.getArea()

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
  if (isNaN(firtsNum) || isNaN(secondNum)) {
    alert("Одно или оба значения не являются числом")
}
}

checkNumbers(1,2)

checkNumbers('1', 'hello')


let n = prompt('Число');

function cubeNumber(n){
  const result = math.pow(number, 3)

  return `n в кубе равняется ${result}` 
}
cubeNumber(n)

let monthNumber = 1;

while (monthNumber <= 12) {
    if (monthNumber >= 1 && monthNumber <=2 || monthNumber === 12) {
        console.log('Зима');
    } else if (monthNumber >= 3 && monthNumber <= 5) {
        console.log('Весна');
    } else if (monthNumber >= 6 && monthNumber <= 8) {
        console.log('Лето');
    } else if (monthNumber >= 9 && monthNumber <= 11) {
        console.log('Осень');
    } else if (monthNumber <=0 && monthNumber >= 13){
      console.log('Неверно');
    }
	monthNumber++;
}
for (let monthNumber = 1; monthNumber <= 12; monthNumber++) {
    if (monthNumber >= 1 && monthNumber <=2 || monthNumber === 12) {
        console.log('Зима');
    } else if (monthNumber >= 3 && monthNumber <= 5) {
        console.log('Весна');
    } else if (monthNumber >= 6 && monthNumber <= 8) {
        console.log('Лето');
    } else if (monthNumber >= 9 && monthNumber <= 11) {
        console.log('Осень');
    } else if (monthNumber <=0 && monthNumber >= 13){
      console.log('Неверно');
    }
}