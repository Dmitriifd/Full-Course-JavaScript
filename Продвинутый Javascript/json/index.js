
const persone = {
    name: 'Alex',
    tel: '+743343333',
    parents: {
        mom: 'Olga',
        dad: 'Mike'
    }
}

// Object => JSON
console.log(JSON.stringify(persone));

// JSON => Object
console.log(JSON.parse(JSON.stringify(persone)));

// Глубокая копия объекта
const clone = JSON.parse(JSON.stringify(persone));

clone.parents.mom = 'Ann';
console.log(persone);
console.log(clone);
