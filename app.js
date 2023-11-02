/*
let nome = 'Victor'; // Global, Local e de bloco -> {bloco}
var sobrenome = 'Godoy';// Global e Local -> Global declarado para dentro e para fora das functions, e local somente nas functions

console.log(nome);
console.log(sobrenome); 



function soma (a, b = 50){  // Valores Opcionais -> Posso ou não definir meu valor B na chamada da function
    console.log(a + b)
}

function sub (a, b, inverter = false){
    if(inverter){
        console.log(b - a)
    }else{
        console.log(a - b)
    }
}



var nome = "Miguel dos Santos";
var idade = 20;

var empresa = {
    nome: "IESB",
    cidade: "Df",
    site: "iesb.com",
    email: "iesb@gmail.com"
}

var user = {
    nome,
    idade,      // Json reduzido, passando somente os nomes das variaveis
    ...empresa // Operador spread, adicionando campos de empresa no objeto user
}

console.log(user)


var empresa ={
    nome: "IESB",
    cidade: "Df",
    site: "iesb.com",
    email: "iesb@gmail.com"
}

var { nome, cidade, site, email } = empresa; // Desestruturação
console.log(nome)
console.log(cidade)
console.log(site)
console.log(email)



var mult3 = (a,b,c) => {   
    return a * b * c   //Arrow Function, quando tenho só 1 parametro não preciso dos parénteses
}

var multred = a => console.log(a*2) // Arrow function reduzida, ao ter somente uma linha

var resultado = mult3(2,3,4)
console.log(resultado) 

console.log(mult3(2,3,5))




var victor = {
    nome: "Victor Lima",
    empresa: "Guia do Programadors"
}

var miguel = {
    nome: "Miguel dos Santos",
    empresa: "Sao Jose"
}

var joao = {
    nome: "Joao Leonardo",
    empresa: "Hepta"
}

var users = [victor, miguel, joao]

var usuario = users.find(user => user.nome === "Joao Leonardo") // Metodo find chamando arrow function, caso seja verdadeiro minha condicao o valor sera retornado. Aceitando outros operadores logicos
console.log(usuario)



var nome = "Miguel dos Santos";
var sobre = "Estudante analise e desenvolvimento de sistemas"

var frase = `Ola meu nome é ${nome} e eu sou ${sobre}.`   // Template literals, para diminuir meu trabalho e não ter que usar "Ola meu nome é" + nome + "e eu sou" + sobre + "."
console.log(frase)
*/