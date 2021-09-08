
 //   new Regex('pattern', 'flags');
 //   /pattern/f


 const answer = prompt('Введите ваше имя');

 const reg = /n/i;
 // Флаги
 // i - что то найти в незавсимости от регистра
 // g - глобальный
 // m - многострочный режим
 console.log(answer.search(reg));
 console.log(answer.match(reg));

const pass = prompt('Password');

// заменить все символы на звездочку, обратный \ для экранирования
console.log(pass.replace(/./g, '*'));

// Заменить все - на :
console.log('12-34-56'.replace(/-/g, ':'));


// Классы: \d - цифры, \w - буквы, \s - пробелы


const str = 'My name is R2D2';

console.log(str.match(/\w\d\w\d/i)); // найдет R2D2

// Обратные классы \D \W \S - не числа, не буквы, не пробелы