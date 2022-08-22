// Estruturas de repetição
// for
// break - para a execução do loop
// continue - pula a execuçaõ do momento

for(let i = 100; i > 0; i--) {
    if(i == 50) {
        break;
    }

    if(i == 69){
        continue;
    }

    console.log(i)
}

// while

let i = 534525235251
while(i > 10) {
    console.log(i)
    i /= 35
}

// for...of

let name = 'Carlos'
let names = ['João', 'Paulo', 'Pedro']

for(let char of name) {
    console.log(char)
}

for(let name of names) {
    console.log(name)
}

// for...in

let person = {
    name: 'John',
    age: 30,
    weight: 88.6
}

for(let property in person) {
    console.log(property)
    console.log(person[property])
}