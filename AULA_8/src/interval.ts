//setInterval(() => console.log("Executando o intervalo"), 1000);
//console.log("Depois do interval"); //executa este 

//depois repete a cada 1000 milesegundos
let contador = 0

const interval = setInterval(() => {
    contador++; 
    console.log("Rodando o intervalo...");
    if(contador === 3){
        console.log("Intervalo cancelado...");
        clearInterval(interval);
    }
}, 700);

console.log("Depois do interval...")