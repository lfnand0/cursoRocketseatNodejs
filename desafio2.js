const getFlag = require('./desafio1.js');

// ao rodar node desafio2.js --name 'luiz' --greeting 'saudacao', precisamos retornar luiz e saudacao

console.log(`Olá ${getFlag('--name')}, ${getFlag('--greeting')}`)