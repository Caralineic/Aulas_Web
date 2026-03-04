//EXERICICIO 1
function maiuscula(m: string): string{
   return m.toUpperCase();
}
console.log(maiuscula("Ola mundo"));

const maiuscula_lambda = (m: string):string => m.toUpperCase(); 
console.log(maiuscula_lambda("Olá mundo!!"));