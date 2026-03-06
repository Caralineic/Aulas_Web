//EXERICICIO 1
function maiuscula(m: string): string{
   return m.toUpperCase();
}
console.log(maiuscula("Olá mundo"));

//lambda
const maiuscula_lambda = (m: string):string => m.toUpperCase(); 
console.log(maiuscula_lambda("Olá mundo!!"));

//EXERCICIO 2
function elevar(a: number, b:number): number{
   return (a ** b);
}

console.log(elevar(5,2));

//EXERICIO 3 


//EXERCICIO 4
type Funcionario = {
    nome : string ;
    cargo : string ;
   };
   
   const funcionarios : Funcionario [] = [
   { nome : " Marcos ", cargo : " Desenvolvedor " } ,
   { nome : " Fernanda ", cargo : " Gerente " } ,
   { nome : " Carlos ", cargo : " Desenvolvedor " } ,
   { nome : " Joana ", cargo : " Analista " }
    ];

   let cargoDesejado = funcionarios.filter(Funcionario => Funcionario.cargo === " Desenvolvedor ");
   console.log(cargoDesejado);


//EXERCICIO 5
type Aluno = {
   nome : string ;
   nota : number ;
   };
   
   const alunos : Aluno [] = [
   { nome : " Alice ", nota : 8 } ,
   { nome : " Bruno ", nota : 5 } ,
   { nome : " Carla ", nota : 7 } ,
   { nome : " Daniel ", nota : 6 }
   ];
   
   let Aprovados = alunos.filter(Aluno => Aluno.nota >= 7);
   console.log(Aprovados);
