console.log("Antes do setTimeout"); 

//setTimeout(() => console.log("Executando o timeout"), 2000); //o tempo que a função ira esperar 
let frase = "Rodando o setTimeout";
const timeout = setTimeout(() => console.log("Executando o setTimeout"), 3000)


frase = "Rodando o clearTimeout";

if(frase !== "Rodando o setTimeout" ){
    clearTimeout
    console.log(frase)
}
//se a frase mudar, ele para e limpa 
console.log("Depois do setTimeout")

