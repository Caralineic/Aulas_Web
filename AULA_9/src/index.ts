import {livro} from "./book"


const livro1 = new livro("Jogos Vorazes", "Suzanne Collns", 2008, "Rocco");
const livro2 = new livro("Crepusculo", "Stephenie Meyer", 2005, "Intrinseca");


livro1.exibirDados()
livro2.exibirDados()
livro1.anoPublicacao = 2007;


import {Usuario} from "./book"


const Usuario1 = new Usuario("Caroline", "carol@gmail.com");


Usuario1.boasvindas()


import {carro} from "./book"


const carro1 = new carro("Toyota", "Corolla", 2008);
carro1.mostrarCarro()


carro1.ano = 2018;
carro1.mostrarCarro()
