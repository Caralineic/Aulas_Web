const numeros = [1, 2, 3, 4, 5];
const dobro = numeros.map(n => n *2);
console.log(dobro)
//map para transformação

const string: string[] = numeros.map( n => `Numeros ${n}`);
console.log(string);

type Produto = {id: number, nome: string, preco: number}
const produtos: Produto[] = [
    {id:1, nome: 'mouse', preco:50},
    {id:2, nome: 'mousePad', preco:150}
];

const nomes: string[] = produtos.map(p => p.nome);
console.log(nomes);



const lista_formatada = produtos.map(p => ({
    id: p.id,
    label: `${p.nome} - R$ ${p.preco.toFixed(2)}`,
    disponivel: true

}))
console.log(lista_formatada);

//percorre o vetor produtos concatena com nome e preço
//criamos disponivel 
//feito para imprimir formatado bonitinho 