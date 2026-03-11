//ordenar vetor 
const numerosx = [9, 3, 2, 7, 5, 11, 22];

numerosx.sort((a, b) => a - b); //crescente
console.log(numerosx); 

numerosx.sort((a, b) => b - a); //descrescente
console.log(numerosx); 

//comparar string
const arquivos: string[] = ["item10.png", "item01.png", "item08.png", "item02.png"];
arquivos.sort((a,b) => a.localeCompare(b));
console.log(arquivos)

"anisio".localeCompare("ANISIO", undefined, {sensitivity: 'base'}, );