// console.log(require()) // retorna code: 'ERR_INVALID_ARG_TYPE'

// require() é uma maneira de chamar módulos do Node.js (tanto módulos nativos, como o path, quanto módulos instalados e criados)

// MÓDULOS NATIVOS:
const path = require('path')
console.log(path.basename(__filename)) //prints require.js
console.log(path.basename("/Users/starter/docs.js")) //prints docs.js

// MÓDULOS CRIADOS:
const myModule = require('./exports')

console.log(myModule) //prints "Enviando dados do meu módulo"