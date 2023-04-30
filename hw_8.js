/*const people = [
    { name: 'Глеб', age: 29 },
    { name: 'Анна', age: 17 },
    { name: 'Олег', age: 7 },
    { name: 'Оксана', age: 47 }
 ];
      const sortedPeople = people.sort((a, b) => a.age - b.age);

      console.log(sortedPeople)
  })*/

  function isPositive(arr) {
    const posArr = arr.map(num => num > 0);
    return posArr
    }
    function isMale() {
      const male = (people.findIndex(gender => people.gender == 'male'));

      console.log(male)
    }
    function filter() {
      let somePeople = people.filter(item => item.id >= 0);
    }
    
    console.log(filter([3, -4, 1, 9], isPositive)); 
    
    const people = [
       {name: 'Глеб', gender: 'male'},
       {name: 'Анна', gender: 'female'},
       {name: 'Олег', gender: 'male'},
       {name: 'Оксана', gender: 'female'}
    ];
    
    console.log(filter(people, isMale)); // Должен выводить [{name: 'Глеб', gender: 'male'},  {name: 'Олег', gender: 'male'}]
    


function showTime() {
   let currentDate = new Date();
	let timerId = setInterval(() => alert(new Date), 3000);
}

function delayForSecond(callback) {
  setTimeout(cakkback, 1000 * 10);
  callback();
}

delayForSecond(function () {
  console.log('Привет, Глеб!');
})

function delayForSecond(cb) {
  setTimeout(() => {
      console.log('Прошла одна секунда');
      if(cb) { 	cb(); }

  }, 1000)
}

// Функция sayHi выводит в консоль приветствие для указанного имени
function sayHi (name) {
  console.log(`Привет, ${name}!`);
}

// Код выше менять нельзя

// Нужно изменить код ниже:
delayForSecond(delayForSecond())
delayForSecond(sayHi('Глеб'))