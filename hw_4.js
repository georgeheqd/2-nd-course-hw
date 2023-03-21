while(true) { // бесконечный цик
	const msg = prompt('Введите сообщение'); // сообщение от пользователя
	if (msg === 'continue') { // если continue
		continue; // код ниже не выполнится, переходим к следующему шагу цикла
	}
	console.log(msg); // выводим сообщение пользователя
	if (msg === 'break') { // если break
		break; // прекращвем выполнение цикла
	}
}/*
let i = 0;         
while
(i< 2) {console.log("Привет");
    i++;
}
let i = 7;
while(i <= 22){
	console.log(i);
	i++;
}

let i = 0;

while (i < 5) {
	console.log(i);
	i++;
}
*/
const obj = {
		'Лима': 'Перу',
		'Джакарта': 'Индонезия',
		'Анкара': 'Турция',
		'Париж': 'Франция',
		'Канберра': 'Австралия'
}

let n = 1000; 
let sum = 0;
while(n >= 50) { 
	if (n /=2 ) {
		continue;
	}
	sum++
}
console.log(sum)

for (let dayNumber = 5; dayNumber >= 5; dayNumber = +5) {
	console.log("Сегодня пятница, " + dayNumber + "-е число. Необходимо подготовить отчет.")
}
for (let dayNumber = 1; dayNumber <= 31; dayNumber++) {
    if (dayNumber == 5) {
        console.log("Сегодня пятница, " + dayNumber + "-е число. Необходимо подготовить отчет.");
    } else if (dayNumber === 12) {
        console.log("Сегодня пятница, " + dayNumber + "-е число. Необходимо подготовить отчет.");
    } else if (dayNumber === 19 ) {
        console.log("Сегодня пятница, " + dayNumber + "-е число. Необходимо подготовить отчет.");
    } else if (dayNumber === 26) {
        console.log("Сегодня пятница, " + dayNumber + "-е число. Необходимо подготовить отчет.");
    }
}