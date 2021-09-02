
const options = {
    name: 'test',
    width: '1024',
    height: '1024',
    colors: {
        border: 'black',
        bg: 'red'
    },
    makeTest: function() {
        console.log('Test');
    }
}

console.log(options.name);

// delete options.name;

console.log(options);

let counter = 0;

for (const key in options) {
    if (typeof(options[key]) === 'object') {
        for (const i in options[key]) {
            console.log(`Свойство ${i}, имеет значение ${options[key][i]}`);
            counter++;
        }
    } else {
        console.log(`Свойство ${key}, имеет значение ${options[key]}`);
        counter++;
    }
    
}
console.log(counter);

// Получение количества свойтв объекта
console.log(Object.keys(options).length);

options.makeTest();

// Деструктуризация
const {border, bg} = options.colors;
console.log(border);