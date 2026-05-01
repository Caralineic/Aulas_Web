import { descricao } from "./descricao";
import {Pacote} from "./Pacote";



export class Voo{
    id: string;
    data_envio: string;
    pacotes: Pacote;
    descricao: descricao;

    constructor(id: string, data_envio: string, pacotes: Pacote, descricao: descricao){
        this.id = id;
        this.data_envio = data_envio;
        this.pacotes = pacotes;
        this.descricao = descricao;
    }
}