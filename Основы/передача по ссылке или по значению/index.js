// Передача по значению - у примитивных типов данных

let a = 5,
    b = a;

b = b + 5;

console.log(b);
console.log(a);

// Передача по ссылке - у объектов

const obj = {
    a: 5,
    b: 1
}

const copy = obj;

copy.a = 10;

console.log(copy);
console.log(obj);

// Поверхностное Копирование объекта

function copyObj(mainObj) {
    let objCopy = {}

    for (let key in mainObj) {
        objCopy[key] = mainObj[key];
    }

    return objCopy;
}

const numbers = {
    a: 2,
    b: 5,
    c: {
        x: 7,
        y: 4
    }
}

const newNumbers = copyObj(numbers);

newNumbers.a = 10;
newNumbers.c.x = 10;

console.log(newNumbers);
console.log(numbers);

const add = {
    d: 17,
    e: 20
}

const clone = Object.assign({}, add);

clone.d = 20;

console.log(add);
console.log(clone);

console.log(Object.assign(numbers, add));

// Поверхностное копирование массива
const oldArray = ['a', 'b', 'c'];
const newArray = oldArray.slice();

newArray[1] = 'sadssfd';

console.log(oldArray);
console.log(newArray);

const video = ['youtube', 'vimeo', 'rutube'],
    blogs = ['wordpress', 'livejournal', 'blogger'],
    internet = [...video, ...blogs, 'vk', 'fb'];

console.log(internet);

function log(a, b, c) {
    console.log(a);
    console.log(b);
    console.log(c);
}

const num = [2, 5, 7];

log(...num);

// Поверхностная копия массива через spred оператор
const array = ['a', 'b'];

const newArray2 = [...array];
newArray2[0] = 'string'
console.log(array);
console.log(newArray2);

// Поверхностная копия объекта через spred оператор

const q = {
    one: 1,
    two: 2
}

const newObj = {...q}

newObj.one = 'string'

console.log(q);
console.log(newObj);