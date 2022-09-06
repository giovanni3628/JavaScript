export abstract class Animal {
    nome: string
    idade: number
    som: string

constructor(
    nome: string,
    idade: number,
    som: string

){
    this.nome = nome
    this.idade = idade
    this.som = som
    
}

abstract emitirSom(): void

}