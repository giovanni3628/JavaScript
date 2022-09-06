import { Cachorro } from "./cachorro";
import { Cavalo } from "./cavalo";
import { Preguica } from "./preguica";

let cachorro = new Cachorro(
    "jose",
    10,
    "Latindo",
)

let cavalo = new Cavalo(
    "spirit",
    12,
    "Relinchando",
)

let preguica = new Preguica(
    "Osvaldo",
    22,
    "Sons de preguiça",
)

cachorro.emitirSom()
