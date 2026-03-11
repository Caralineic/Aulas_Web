const numeros = [1, 2, 3, 4, 5];
const frutas: string[] = ['Maca', 'Banana', 'Uva']; 

frutas.forEach( (item, index) => {
    console.log( `${index}: ${item}`)
}); 
//percorre o vetor e mostra a posição com os itens 

let contador: number = 0;
numeros.forEach(item => { //soma e guarda em contador 
    contador += item
})

