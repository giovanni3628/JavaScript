/*3- Faça um programa que receba três inteiros e diga qual deles é o maior. */

const prompt = require("prompt-sync")()

let n1 = prompt("Digite o primeiro número: ")
let n2 = prompt("Digite o segundo número: ")
let n3 = prompt("Digite o terceiro número: ")

if(n1 > n2 && n1 > n3){
    console.log(`O primeiro número digitado é o maior ${n1}`)
}else if(n2 > n1 && n2 > n3){
    console.log(`O segundo número digitado é o maior ${n2}`)

}else if(n3 > n1 && n3 > n2){
    console.log(`O terceiro número digitado é o maior ${n3}`)

}else{
    console.log("Algum dos números digitados são iguais")
}
