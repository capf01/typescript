// tipagem no typescript


// para transformar automaticamente o typescript em javascript abrir o terminal depois add + o bash e dar o comando tsc --w
// tipagem implicita
let username=`cesar`
username=`augusto`// uma vez atribuida o tipo da variável não pode alterar <exemplo de tipagem implicita>

// tipagem explicita

let iD:number=123456
iD=7654 // No tipo explicito se coloca o tipo da variável

// union types serve para unir variaveis de tipos diferentes
let numeroString: number|string=1234
numeroString=`frase`+12345 
console.log(numeroString)

let generico:any=[]
generico={
 a:'',
 b:8,
 c: true,
}
const listaDeNome:string[]=[`João`,`César`,`Renato`]
listaDeNome.push(`Maria`)
console.log(listaDeNome)
//para declarar um array que receba mais de um tipo de dado
const valoresDiversos: Array<string|number|boolean>=[`hello`,2,`lol`,true]

let listaPodeTudo:Array<any>=[true,`lol`,2.3,4]
console.log(listaPodeTudo)




