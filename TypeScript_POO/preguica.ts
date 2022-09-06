import { Animal } from "./animal";

export  class Preguica extends Animal{
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
    console.log("Sons de preguiça")
}

subirEmArvores(){
    
    console.log("Subindo na árvore")
}
}