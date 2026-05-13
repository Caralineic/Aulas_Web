import express, { Request, Response } from "express";

import { Produto } from "./Produto";
import { Fabricante } from "./Fabricante";
import { Endereco } from "./Endereco";

const app = express();

app.use(express.json());

const produtos: Produto[] = [];

//POST
app.post("/produtos", (req: Request, res: Response): void => {

    try{
        const data: any = req.body

        if(
            !data.id || 
            !data.nome ||
            !data.preco ||
            !data.fabricante 
        ){
            throw new Error ("Produto requer id, nome, preço e fabricante!")
        }

        const produtoExistente = produtos.find(
            p => p.id === data.id
        )

        if(produtoExistente){
            throw new Error("ID ja cadastrado")
        }

        if(data.preco <= 0){
            throw new Error("Preço deve ser maior que zero")
        }

        if(!data.fabricante.nome){
            throw new Error("Fabricante requer nome")
        }

        if(!data.fabricante.endereco.cidade || !data.fabricante.endereco.pais){
            throw new Error("Endereço requer cidade e país")
        }

        const endereco = new Endereco(
            data.fabricante.endereco.cidade,
            data.fabricante.endereco.pais
        )

        const fabricante = new Fabricante(
            data.fabricante.nome,
            endereco
        )

        const produto = new Produto(
            data.id,
            data.nome,
            data.preco,
            fabricante
        )

        produtos.push(produto)

        res.status(200).json(produto)

    }catch (e: unknown){  
        res.status(400).json({
            Message: (e as Error).message
        })
    }
})

//GET - LISTAR PRODUTO
app.get("/produtos", (req:Request, res: Response):void => {

    try {
        res.status(200).json(produtos)

    }catch(e: unknown){
        res.status(500).json({
            Message: (e as Error).message
        })
    }
   
})


//GET - BUSCAR POR ID 
app.get("/produtos", (req:Request, res: Response):void => {
    try{

        const id = Number(req.params.id)

        const produto = produtos.find(
            p => p.id === id 
        )

        if(!produto){

            res.status(404).json({
                Message: "P"
            })
        }
    }

})











































function filtraProdutoPorID(req: Request, res: Response): void {
    try {
        let id = req.params.id
        res.status(200).json({ ID: id })
    } catch (e: unknown) {
        res.status(400).json({ Message: "Necessário informar o ID" })
    }
}

function filtrarProdutoPorNome(req: Request, res: Response): void {
    try {
        let name = req.query.name
        res.status(200).json({ Name: name })
    } catch (e: unknown) {
        res.status(400).json({ Message: "Necessário informar o nome" })
    }
}


function novoProduto(req: Request, res: Response): void {
    try {
        let data: any = req.body

        if (!data.nome || !data.preco || !data.fabricante) {
            throw new Error("Produto requer nome, preço e fabricante")
        }

        const produto = new Produto(data.id, data.nome, data.preco, data.fabricante)
        produtos.push(produto);
        res.status(200).json(produtos)
    } catch (e: unknown) {
        res.status(400).json({ Message: (e as Error).message })
    }
}

app.get('/api/hello/:id', helloWorld)

app.get('/api/product/:id', filtraProdutoPorID)
app.get('/api/product', filtrarProdutoPorNome)
app.post('/api/product', novoProduto)

app.listen(PORT, () => console.log(`API rodando na URL : http://localhost:${PORT}`));

