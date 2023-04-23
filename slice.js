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
let arrList = [1, 2, 3, 4, 5, 6, 7, 8, 9];
arr = arr.sort(() => Math.random() - 0.5);
alert(arr)
let first = prompt('Чему равнялся первый элемент массива?',);
alert(first)

let last = prompt('Чему равнялся последний элемент массива?',);
alert(last)

function right() {
    if ((first == arr[0]) & (last == arr[6])) {
        alert("Вы угадали оба елмента");
    }
    else if ((first == arr[0]) & (last == arr[6])) {
        alert("Вы угадали один элемент");
    }
    else ((first == arr[0]) & (last == arr[6])) {
        alert("Вы не угадали ни одного элемента,");
    }
}
}