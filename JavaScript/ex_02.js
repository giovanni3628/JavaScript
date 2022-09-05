/*2 - Faça um programa em que o usuário digite o diâmetro de um círculo
 e calcule a área e o perímetro dele
 */
 const prompt = require("prompt-sync")()


 let diametro = prompt("Digite o diâmetro: ")

 var raio = diametro/2
 var pi = 3.14

 var perimetro = 2 * pi * raio
 var area = pi * (raio * raio)

 console.log(`O valor da área é ${area} e o valor do perímetro é ${perimetro}`)
