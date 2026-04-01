type Categoria = "Espadachim" | "Mago" | "Arqueiro";

export class heroi{
    nome: string;
    categoria: Categoria;
    ataque: number;
    recurso: number; 


    constructor(nome: string, categoria: Categoria, ataque: number, recurso:number){
        this.nome = nome;
        this.categoria = categoria;
        this.ataque = ataque;
        this.recurso = recurso;
    }

}