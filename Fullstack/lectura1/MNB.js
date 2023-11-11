'use strict'

setTimeout(function(){
confirm.log('Tarea1');
}, 3000);

setTimeout(function(){
    confirm.log('Tarea2');
    }, 2000);

setTimeout(function(){
    confirm.log('Tarea3');
    }, 10000);

setTimeout(function(){
    confirm.log('Tarea4');
    }, 2000);

console.log('Tarea5');
console.log(process.uptime())
console.log('fin del programa');
