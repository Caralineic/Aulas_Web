import { Request, Response } from "express";
import { ProdutoService } from "../service/ProdutoService";

const produtoService = new ProdutoService();

//POST 
export function cadastrarProduto(req: Request, res: Response){

    try{
        const novoProduto = produtoService.cadastrarProduto(req.body);
        res.status(201).json(
            {
                menssagem: "Produto adicionado com sucesso",
                produto: novoProduto
            }
        );
    } catch (e: unknown) {
        res.status(400).json({ menssagem: (e as Error).message});
    }
}

//GET ID OU NOME 
export function buscarProduto(req: Request, res: Response): void{
    try{
        const {id, nome} = req.query as {id?: string, nome?: string};
        const produto = produtoService.buscar(id, nome);   
        res.status(200).json({
            menssagem: "Produto encontrado com sucesso",
            produto
        });
    }catch (e: unknown) {
        res.status(400).json({ menssagem: (e as Error).message});
    }   
}


//GET PRODUTOS POR ORDEM 
export function listarProdutos(req: Request, res: Response): void{
    try{
        const { ordem } = req.query as { ordem?: "asc" | "desc" };
        const produtos = produtoService.listar(ordem);
        res.status(200).json(produtos);
    }catch (e: unknown) {
        res.status(400).json({ menssagem: (e as Error).message});
    }           
}    