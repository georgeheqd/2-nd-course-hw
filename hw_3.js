/*let password = ('пароль');
prompt('Введите пароль');
if (prompt === password){
    alert("Пароль введен верно");
} else{
    alert("Пароль введен неправильно")
}*/

/*let c = prompt(Number('Любое число'));
let result = c > 0 && c < 10 ? 'Верно' : 'Неверно';
console.log(result);*/

/*let d = prompt(Number('число'));
let e = prompt(Number('число'));
if ((d || e) > 100) {
    alert("Верно");
} else{
    alert("Wrong")
}*/

/*let a = number('2');
let b = number('3');
alert(a + b);*/

let monthNumber = Number(prompt('месяц'));
switch (monthNumber) {
	case 1:
		console.log('Сегодня второй месяц зимы');
		break;
	case 2:
		console.log('Сегодня третий месяц зимы');
		break;
    case 3:
		console.log('Сегодня первый месяц весны');
		break;
    case 4:
		console.log('Сегодня второй месяц весны');
		break;
    case 5:
		console.log('Сегодня третий месяц весны');
		break;
    case 6 :
		console.log('Сегодня первый месяц лета');
		break;
    case 7 :
		console.log('Сегодня второй месяц лета');
		break;
    case 8 :
		console.log('Сегодня третий месяц лета');
		break;
    case 9 :
		console.log('Сегодня первый месяц осени');
		break;
    case 10 :
		console.log('Сегодня второй месяц осени');
		break;
    case 11 :
		console.log('Сегодня третий месяц осени');
		break;
    case 12 :
		console.log('Сегодня первый месяц зимы');
		break;    
	default: console.log('неверно');
		break;
}