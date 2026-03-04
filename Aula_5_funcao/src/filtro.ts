const numeros: number[] = [1, 2, 3, 4, 5, 6, 7, 8];

const semDuplicados = numeros.filter((valor, indice, self) => {
    return self.indexOf(valor) === indice;
});

let pares = numeros.filter(n => n% 2 === 0);

let maiorQueTres = numeros.filter( n => n>3);

//representar algo 
type Pessoa = {
    nome: string;
    idade: number;
}

const pessoas: Pessoa[] = [
    {nome: "carol", idade: 19}, 
    {nome: "Brenda", idade: 17},
    {nome: "João", idade: 25},
]

let maiordeIdade = pessoas.filter(Pessoa => Pessoa.idade >= 18);