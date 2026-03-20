type Tarefa = {
    descricao : string ;
    prioridade : number ;
    concluida: boolean;
    };

const tarefas : Tarefa [] = [
    {descricao: " Fazer relatório ", prioridade : 2 , concluida : false },
    {descricao: " Enviar e-mail ", prioridade : 3 , concluida : false } ,
    {descricao: " Reunião com equipe ", prioridade : 1 , concluida : false }
];

function imprimirTarefa ( descricao:string, indice:number, totalTarefas:number ):void {
    console.log (`Tarefa concluída: ${descricao}`) ;
    console.log (`Progresso: ${indice+1}/ ${totalTarefas}`) ;
};
    
//arrowfunction => quando quero resolver algo rápido e clean uma função com varios comenados melhor a função nomeada 


//callcack é uma função que tem que ter os tres parametros, como uma condição 
function executarTarefas(tarefas: Tarefa[],callback: ( descricao:string, indice:number, totalTarefas:number ) => void, timer: number = 1000 ){

    //ordenar as tarefas por prioridade 
    tarefas.sort((a,b) => b.prioridade - a.prioridade); 

    //esperar um tempo para executar as tarefas 
     let contador = 0; 

     const interval = setInterval(() => {
        if(contador >= tarefas.length || tarefas[contador]?.descricao === "Cancelar"){
            clearInterval(interval);
        }else{
            const tarefa = tarefas[contador];
            if(tarefa){
                tarefa.concluida = true; 
                callback(tarefa.descricao, contador, tarefas.length); 
                contador++
            }
        }
     }, timer)
}

executarTarefas(tarefas , imprimirTarefa , 1500) ;