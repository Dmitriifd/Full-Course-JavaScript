'use strict';

// Filter

const names = ['Ivan', 'Ann', 'Ksenia', 'Voldemart'];

const shortNames = names.filter((name) => {
    return name.length > 5;
});

console.log(shortNames);

// Map

const answers = ['IvAn', 'AnnA', 'Hello'];

const result = answers.map(name => name.toLowerCase());

console.log(result);

// every/some - возвращает boolean значение true или false

const some = [4, 'qew', 'ffswreq'];

// console.log(some.some(item => typeof(item) === 'number'));

console.log(some.every(item => typeof (item) === 'number'));

// reduce

const arr = [4, 5, 1, 3, 2, 6];
                       //0   4
                       //4   5
                       //9   1
                       //10  3
const res = arr.reduce((sum, current) => sum + current);
// const res = arr.reduce((sum, current) => sum + current, 3);

console.log(res);

const arr2 = ['apple', 'pear', 'plum'];

const res2 = arr2.reduce((sum, current) => sum + ', ' + current);
console.log(res2);

// --------------

const obj = {
    ivan: 'persone',
    ann: 'persone',
    dog: 'animal',
    caat: 'animal',
}

const newArr = Object.entries(obj).filter(item => item[1] === 'persone').map(item => item[0])
console.log(newArr);