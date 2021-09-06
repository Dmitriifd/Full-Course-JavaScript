'use strict';

// window.localStorage;

// Записать новый ключ
// localStorage.setItem('number', 5); // название ключа и значение

// Получить
// localStorage.getItem('number');

// Удалить
// localStorage.removeItem('number');

// Очистить localStorage
// localStorage.clear();

const checkbox = document.querySelector('#checkbox');
const form = document.querySelector('form');
const change = document.querySelector('#color');

if (localStorage.getItem('isChecked')) {
    checkbox.checked = true;
}

if (localStorage.getItem('bg') === 'changed') {
    form.style.backgroundColor = 'blueviolet';
}

checkbox.addEventListener('change', () => {
    localStorage.setItem('isChecked', true);
});


change.addEventListener('click', () => {
    if (localStorage.getItem('bg') === 'changed') {
        localStorage.removeItem('bg');
        form.style.backgroundColor = 'white';
    } else {
        localStorage.setItem('bg', 'changed');
        form.style.backgroundColor = 'blueviolet';
    }
});


const person = {
    name: 'Alex',
    age: 25
}

const serializedPerson = JSON.stringify(person);

localStorage.setItem('alex', serializedPerson);

console.log(JSON.parse(localStorage.getItem('alex')));