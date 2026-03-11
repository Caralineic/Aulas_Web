for(let i = 0 ; i<5; i++){
    console.log(`iteração: ${i}`)
}


let contador = 0;
while (contador < 5){
    console.log("Iteração", contador);
    contador ++
}

let num = 5;
do {
    console.log(`Numero: ${num}`);
    num ++
}while (num < 5); 

let numeros: number[] = [10, 20,30];

for (const num of numeros) {
    console.log("numeros:", num);
}

//const pessoa = {nome: "Alice", idade: 25, cidade: "São Paulo"};
//for(const chave in pessoa){
//   console.log(``${chave}: ${pessoa[chave]})
//}