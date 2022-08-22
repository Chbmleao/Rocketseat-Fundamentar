// EXERCÍCIO 1 - Transformar notas escolares

/*

Crie um algoritmo que transforme as notas do sistema numérico para sistema de notas em caracteres tipo A B C

* de 90 para cima       A
* entre 80 e 89         B
* entre 70 e 79         C
* entre 60 e 69         D
* menor que 60         F

*/

function getScore(score) {
    let scoreA = score >= 90 && score <= 100
    let scoreB = score >= 80 && score < 90
    let scoreC = score >= 70 && score < 80
    let scoreD = score >= 60 && score < 70
    let scoreF = score >= 0 && score < 60

    let scoreFinal

    if(scoreA) {
        scoreFinal = 'A'
    } else if(scoreB) {
        scoreFinal = 'B'
    } else if(scoreC) {
        scoreFinal = 'C'
    } else if(scoreD) {
        scoreFinal = 'D'
    } else if(scoreF) {
        scoreFinal = 'F'
    } else {
        scoreFinal = 'Nota inválida.'
    }

    return scoreFinal
}

console.log(getScore(101))
console.log(getScore(-1))
console.log(getScore(0))
console.log(getScore(1))
console.log(getScore(45))
console.log(getScore(60))
console.log(getScore(61))
console.log(getScore(75))
console.log(getScore(85))
console.log(getScore(95))