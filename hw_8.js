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

