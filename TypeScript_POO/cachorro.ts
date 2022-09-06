import { Animal } from "./animal";

export  class Cachorro extends Animal{
    nome: string
    idade: number
    som: string

constructor(
    nome: string,
    idade: number,
    som: string

){

    super(nome, idade, som)

}

emitirSom(): void {
    console.log("Latindo")
}
correr(){

    console.log("Correndo")
}
}