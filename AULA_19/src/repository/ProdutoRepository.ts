import { Produto } from "../model/Produto";

export class ProdutoRepository{
    private static instance: ProdutoRepository;
    private produtos: Produto[] = [];

    private constructor(){}

    public static getInstance(): ProdutoRepository{
        if(!this.instance){
            this.instance = new ProdutoRepository();
        }
        return this.instance;
    }

    insereProduto(produto: Produto){
        this.produtos.push(produto);
    }

    filtraProcutoporId(id: number): Produto | undefined{
        return this.produtos.find(produto => produto.id === id);
    }

    filtraProdutoPorNome(nome: string): Produto | undefined{
        return this.produtos.find(
            produto => produto.nome.toLowerCase() === nome.toLowerCase()
        );
    }

    //busca por id ou nome 
    BuscarPorIdOuNome(id?: number, nome?: string): Produto | undefined{
        if( id !== undefined) return this.filtraProcutoporId(id);
        if(nome !== undefined) return this.filtraProdutoPorNome(nome);
        return undefined;
    }


    // Busca por descrição
    FiltraProdutoPorDescricao(descricao: string): Produto | undefined{
        return this.produtos.find(
            produto => produto.nome.toLowerCase() === descricao.toLocaleLowerCase()
        );
    }

    filtraTodosProdutos(): Produto[]{
        return this.produtos;
    }

    //ordenar preço 
    filtraPorPreco(ordem?: "asc" | "desc"): Produto[]{ 
        const copia = [...this.produtos];
        if(ordem === "asc"){
            return copia.sort((a, b) => a.preco - b.preco);
            }
        if(ordem === "desc"){
            return copia.sort((a, b) => b.preco - a.preco);
        }
        return copia;
    }

    idJaExiste(id: number): boolean {
        return this.produtos.some(p => p.id === id);
    }
}

