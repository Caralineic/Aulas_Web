import { Produto } from "../model/Produto";
import { Fabricante } from "../model/Fabricante";
import { Endereco } from "../model/Endereco";
import { ProdutoRepository } from "../repository/ProdutoRepository";

export class ProdutoService {

    produtoRepository: ProdutoRepository = ProdutoRepository.getInstance();

    cadastrarProduto(produtoData: any): Produto {

        if (!produtoData.id || !produtoData.nome || !produtoData.preco || !produtoData.fabricante) {
            throw new Error("Informações incompletas");
        }

        if (this.produtoRepository.idJaExiste(Number(produtoData.id))) {
            throw new Error("ID já existente");
        }

        if (produtoData.preco <= 0) {
            throw new Error("Preço deve ser maior que zero");
        }

        if (!produtoData.fabricante.nome) {   
            throw new Error("Fabricante requer nome");
        }

        if (!produtoData.fabricante.endereco.cidade || !produtoData.fabricante.endereco.pais) {
            throw new Error("Endereço requer cidade e país");
        }

        const endereco = new Endereco(
            produtoData.fabricante.endereco.cidade,
            produtoData.fabricante.endereco.pais
        );

        const fabricante = new Fabricante(produtoData.fabricante.nome, endereco);

        const produto = new Produto(
            Number(produtoData.id),
            produtoData.nome,
            produtoData.preco,
            fabricante
        );

        this.produtoRepository.insereProduto(produto);
        return produto;
    }

   
    buscar(id?: string, nome?: string): Produto {
        if (!id && !nome) {
            throw new Error("Informe id ou nome para busca");
        }

        const produto = this.produtoRepository.BuscarPorIdOuNome(
            id ? Number(id) : undefined,
            nome
        );

        if (!produto) {
            throw new Error("Produto não encontrado");
        }

        return produto;
    }

    
    listar(ordem?: "asc" | "desc"): Produto[] {
        if (ordem && ordem !== "asc" && ordem !== "desc") {
            throw new Error("Ordem deve ser 'asc' ou 'desc'");
        }
        return this.produtoRepository.filtraPorPreco(ordem);
    }
}