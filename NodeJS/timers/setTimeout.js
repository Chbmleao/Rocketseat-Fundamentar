// setTimeout rodar uma função depois de X milissegundos

const timeOut = 3000
const finished1 = () => console.log('1 done!')
const finished2 = () => console.log('2 done!')

setTimeout(finished1, timeOut)
setTimeout(finished2, timeOut-1)
console.log('Show')