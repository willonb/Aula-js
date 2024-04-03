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
//push

const list = ['a', 'b', 'c', 'd', 'e']

console.log(list.length, 'array')
console.log(list[4])

list [5] = 'f'
console.log(list)

//push chama mais pro final

list.push('g')
console.log(list, 'push')

//

console.log(list[list.length -1], 'aqui')

//pop tirar o ultimo

list.pop()
console.log(list)

// list.shift - remover o primeiro momento 

list.shift
console.log(list, 'shift')

// add um elemento

list.unshift('a')
console.log(list, 'unshift')

// start do slice + igual valor do legnth anterior

console.log(list.slice(1, 3))

// objetos

const product = {
  name: 'camisa',
  price: 49.99,
  instock: true,
  sizes: ['P', 'M', 'G']
}

console.log(product.name)
console.log(product.price)
console.log(product.instock)
console.log(product.sizes)

product.color = 'blue'
console.log(product)

//destructuring = A sintaxe de atribuição de desestruturação é uma expressão JavaScript que permite descompactar valores de arrays, ou propriedades de objetos, em variáveis ​​distintas.

 
const {price, instock } = product

console.log(price)

// JSON JSON é um formato para armazenar e transportar dados. JSON é frequentemente usado quando os dados são enviados de um servidor para uma página da web.

const game = {
  name: 'call of duty',
  year: '2024',
  age: '18'
}

const jsonpt = JSON.stringify(game)
const jsonreset = JSON.parse(jsonpt)


console.log(jsonpt)
console.log(jsonreset)

// data

const data = new Date()
console.log(data)

// operadores

const a = 10
const b = 15

const soma = a + b 
const subt = a - b 
const div = a / b
const mult = a * b
const por = a % b

console.log(soma, subt, div, mult, por, 'ari')

// incremento e decremento 

if ( soma > 10){ 
console.log('aprovado')
} else {
  console.log('reprovado')
}

soma == 10 ? console.log ('aprovado') : console.log('reprovado')

