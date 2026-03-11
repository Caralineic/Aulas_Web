let nomes: string[] = ["Ana", "João", "Maria"];
console.log(nomes);

let numeros: number[] = [1, 2, 3, 4, 5];

console.log("numero pos 1:", numeros[1]);

nomes.splice(1,1); //exclui o nome da posição 
console.log("Depois do splice: ", nomes);


let years: Array < number> = [20, 30, 40]; 

let fruits: string[] = ["Banana", "Maaça"];
fruits.push("Laranja"); //adiciona no final
fruits.unshift("Uva"); //adiciona no inicio 

fruits.pop(); //remove o ultimo 

fruits.shift();  //remove o primeiro 

console.log(fruits[0]);

console.log(fruits.length) //saber a quantidade de posição