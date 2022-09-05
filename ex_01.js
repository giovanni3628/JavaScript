/* 1- O usuário digitará sua idade
e o programa deverá printar o ano em que ele nasceu.
 */
const prompt = require("prompt-sync")()


let idade = prompt("Digite a sua idade: ")
console.log(`O seu ano de nascimento é: ${2022 - idade}`)