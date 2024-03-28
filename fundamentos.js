// console 

console.log('esse é o método log')

//console.warn ('esse é o método warn')

//console.error('quebrou a aplicação')

console.table('coloque uma array aqui')

console.info('essa é uma informação')


//variáeis

var banana = 10
let maçã = 15
const uva = 20 

console.log(banana)
console.log(maçã)
console.log(uva)

// tipos de dados 

const name = 'william pascini'
let qtd = 5
const isapproved = false
let lastName = null
let age
const languages = ['JavaScript', 'PHP', 'Python']
const user = {email: 'lcs@teste.com', password: 'teste123'}

// typeof mostra o tipo da váriavel 


console.log (name)
console.log ( qtd)
console.log (isapproved)
console.log (age)
console.table(languages)
console.log (user)

//array numeros 

let dia = [27,12,1999] 

console.table(dia)

//array objeto

let obj = [
  {id: 'g', name: 'william', age: 24},
  {id: 'j', name: 'lucas', age: 26}
]

console.table(obj)

// métodos de string
// split
//toLowerCase (deixar tudo minusculo)
//toUpperCase (deixar maiusculo)
//lenght (fala  a quantidade, caracteristicas)
//indexOf retorna o indice do valor mencionador (mostra a posiçao)
//slice busca uma palavra atraves do indice que você selecionou (inicio) ao (fim)
 const fullname = 'WilliamxSilvaxPascinixRibeiroxjesus'

 console.log(fullname, 'nome completo')

 const stringtoarray = fullname.split('x')

 console.table(stringtoarray)

 // teste toLowerCase

 let teste ='TESTE CAIXA'

 console.log(teste.toLowerCase())

// teste toUpperCase

let teste2 = 'teste caixa 2'

console.log(teste2.toUpperCase())

//teste lenght

let teste3 = 'william'

console.log(teste3.length)

//teste indexOF

console.log(fullname.indexOf ('Pascini'))

//teste slice

console.log(fullname.slice(14, 21))

// métodos de array

const list = ['a', 'b', 'c', 'd', '']




 

 