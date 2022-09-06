import { Animal } from "./animal";

export  class Cavalo extends Animal{
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
    console.log("Relinchando")
}
correr(){
    
    console.log("Correndo")
}
}