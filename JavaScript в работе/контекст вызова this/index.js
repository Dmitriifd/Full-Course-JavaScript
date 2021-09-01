'use strict'

function showThis(a, b) {
    console.log(this);
    function sum() {
        console.log(this);
        return a + b;
    }

    console.log(sum());
}

showThis(4,5);

const obj = {
    a: 20,
    b: 15,
    sum: function() {
        function shout() {
            console.log(this);
        }
        shout();
    }
}

obj.sum();

function User(name, id) {
    this.name = name;
    this.id = id;
    this.human = true;
    this.hello = function () {
        console.log(`Hello ${this.name}`);
    };

}

const ivan = new User('Ivan', 28);

function sayName(surname) {
    console.log(this);
    console.log(this.name + surname);
}

const user = {
    name: 'John'
}

// call, apply - Установка контекста
sayName.call(user, 'Smith');
sayName.apply(user, ['Smith']);

function count(num) {
    return this * num;
}

// bind Создает новую функцию с определеным контекстом
const double = count.bind(2);
console.log(double(3));
console.log(double(13));


// 1) Обычная функция: this = window, но если стоит use strict - undefined
// 2) Контекст у методов объекта - это будет сам объект
// 3) this в конструкторах и классах - это новый экземпляр объекта
// 4) Ручная привязка this: call, apply, bind

const btn = document.querySelector('button');

btn.addEventListener('click', function() {
    // Контекст вызова - сам элемент на котором произошло событие
    console.log(this);
});

const obj2 = {
    num: 5,
    sayNumber: function() {
        // У стрелочной функции нет своего контекста вызова, она берет его у своего родителя
        const say = () => {
            // this = obj2
            console.log(this);
        };

        say();
    }
}

obj2.sayNumber();

