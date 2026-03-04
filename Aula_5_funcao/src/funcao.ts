function mensagem (f: string): string {
    return f;
}

//lambda
const mensagem_lambida = (f: string):string => f; 

console.log(mensagem_lambida("Olá mundo!!"));



function soma(a: number, b:number): void{
    console.log(a + b);
}

soma(2,5)

//lambda
const soma_lambda = (a:number, b:number): void => console.log("a + b");
soma_lambda(2,2);

//concatenação
function saudacao(nome: string = "visitante"): string{
    return  `Olá, ${nome}`;
}

saudacao("ADS");

const saudacao_lambda = (nome: string): string => `Olá, ${nome}`;

function multiplcar(a: number, b:number){
    return a * b 
}

//valores opcionais usando ?
const multiplicarOpcional = (a: number, b?:number ):number =>{
    if(b === undefined){
        return a;
    }
    return a * b;
}

multiplicarOpcional(1,2)
   
//Operador ternario quando necessario 
const MultiplicarOperadorTernario = (a: number, b:number): number => (b === undefined) ? a:a*b // ? funciona como if aqui 

//operador coalescencia nula 
const OperadorCoalescencia = (a: number, b:number): number => a * (b ?? 1); //testa se b é nulo ou indefinido e devolve a x 1 