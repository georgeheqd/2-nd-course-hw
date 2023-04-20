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
}
let first = prompt('Чему равнялся первый элемент массива?',);
alert(first)

let last = prompt('Чему равнялся последний элемент массива?',);
alert(last)

function right() {
    if ((first == ) & (last == )) {
        alert("Вы угадали оба елмента");
    }
    else if ((first == ) || (last == )) {
        alert("Вы угадали один элемент");
    }
    else ((first != ) & (last != )) {
        alert("Вы не угадали ни одного элемента,");
    }
}