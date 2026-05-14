import express, { Request, Response } from "express";

import { Produto } from "./Produto";
import { Fabricante } from "./Fabricante";
import { Endereco } from "./Endereco";
import { json } from "node:stream/consumers";

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
app.get("/produtos/:id", (req: Request, res: Response): void => {

	try {

		const id = Number(req.params.id)

		const produto = produtos.find(
			p => p.id === id
		)

		if (!produto) {

			res.status(404).json({
				Message: "Produto nao encontrado"
			})

			return
		}

		res.status(200).json(produto)

	} catch (e: unknown) {

		res.status(500).json({
			Message: (e as Error).message
		})

	}
})


//PUT - atualizar produto 
app.put("/produtos/:id", (req: Request, res: Response): void => {

	try {

		const id = Number(req.params.id)

		const produto = produtos.find(
			p => p.id === id
		)

		if (!produto) {

			res.status(404).json({
				Message: "Produto nao encontrado"
			})

			return
		}

		const data: any = req.body

		if (data.nome) {
			produto.nome = data.nome
		}

		if (data.preco) {

			if (data.preco <= 0) {
				throw new Error(
					"Preco deve ser maior que zero"
				)
			}

			produto.preco = data.preco
		}

		if (data.fabricante) {

			if (data.fabricante.nome) {
				produto.fabricante.nome =
					data.fabricante.nome
			}

			if (data.fabricante.endereco) {

				if (data.fabricante.endereco.cidade) {
					produto.fabricante.endereco.cidade =
						data.fabricante.endereco.cidade
				}

				if (data.fabricante.endereco.pais) {
					produto.fabricante.endereco.pais =
						data.fabricante.endereco.pais
				}
			}
		}

		res.status(200).json(produto)

	} catch (e: unknown) {

		res.status(400).json({
			Message: (e as Error).message
		})

	}
})



//DELETE 
app.delete("/produtos/:id", (req:Request, res: Response):void =>{

    try{
        const id = Number(req.params.id)

        const indice = produtos.findIndex(
            p => p.id === id 
        )

        if(indice === -1){

            res.status(404).json({
                Message: "Produto não encontrado"
            })

            return 
        }

        produtos.splice(indice,1)

        res.status(200).json({
            Message: "Produto removido com sucesso"
        })

    }catch(e: unknown){

        res.status(500).json({
            Message: (e as Error).message
        })
    }
})


app.listen(3000, () => {
    console.log("Servidor rodando na porta 3000")
})