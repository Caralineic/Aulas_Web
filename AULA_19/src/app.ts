import express from "express";
import {
    cadastrarProduto,
    buscarProduto,
    listarProdutos
} from "./controller/ProdutoController";

const app = express();
const PORT = process.env.PORT ?? 3000;

app.use(express.json());

// POST - Cadastrar produto (ex. 4: verifica nome/descrição duplicada)
app.post("/api/product", cadastrarProduto);

// GET - Buscar por ID ou nome (ex. 2: ?id=1 ou ?nome=Teclado)
app.get("/api/product", buscarProduto);

// GET - Listar todos ordenados por preço (ex. 3: ?ordem=asc ou ?ordem=desc)
app.get("/api/products", listarProdutos);

app.listen(PORT, () => {
    console.log(`API rodando em http://localhost:${PORT}`);
});