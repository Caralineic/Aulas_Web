export class livro{
    titulo: string;
    autor: string;
    anoPublicacao: number;
    editora: string;


    constructor(titulo: string, autor: string, anoPublicacao: number, editora:string){
        this.titulo = titulo;
        this.autor = autor;
        this.anoPublicacao = anoPublicacao;
        this.editora = editora;
    }


    exibirDados() :void {
        console.log(`${this.titulo} \n ${this.autor} \n ${this.anoPublicacao} \n ${this.editora}`)
    }
}


export class Usuario{
    nome: string;
    email: string;


    constructor(nome: string, email: string){
        this.nome = nome;
        this.email = email;
    }


    boasvindas() :void {
        console.log(`Bem vindo ${this.nome} Seu email é ${this.email}`)
    }
}


export class carro{
    marca: string;
    modelo: string;
    ano: number;


    constructor(marca: string, modelo: string, ano: number){
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }


    mostrarCarro() : void{
        console.log(`Marca: ${this.marca} \n Modelo: ${this.modelo} \n Ano: ${this.ano}`);
    }


}
