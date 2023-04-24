const playSeasonsGame = () => {
    let arr = [
        "Яблоко",
        "Груша",
        "Дыня",
        "Виноград",
        "Персик",
        "Апельсин",
        "Мандарин",
    ];
arr = arr.sort(() => Math.random() - 0.5);
alert(arr)
let first = prompt('Чему равнялся первый элемент массива?',);
alert(first)

let last = prompt('Чему равнялся последний элемент массива?',);
alert(last)

if (first === arr[0] && last === arr[arr.length - 1]) {
  alert("Вы угадали оба елмента");
} else if (first === arr[0] && last === arr[arr.length - 1]) {
  alert("Вы угадали один элемент");
} else {
  alert("Вы не угадали ни одного элемента");
}
}
