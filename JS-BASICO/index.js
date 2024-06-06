console.log("carregou o script")


let x = 10;

if(x > 5) {
    let y = 10
    console.log(x + y)
    // var z = 200
}
idade = 15
const obj = { nome: "Amora" }
// obj = null
obj.idade = "4m"    
// sobrenome = "Lobo"
console.log(idade, obj)


const nome = "Nicholas"
let sobrenome = "Macedo"
var idade = 55


// const texto = "Lorem " + nome + " sit amet consectetur adipisicing elit. Nesciunt, praesentium."
const texto = `
    <p class="texto">
    Lorem ${nome} sit amet 
    consectetur adipisicing elit. 
    Nesciunt, praesentium.
    </p>

    <strong>idade</strong>: ${idade}
`

// document.body.innerHTML = texto
//console.log(texto)



// function alert(texto) {
//     console.log('passou por aqui')
//     window.alert(texto)
// }


var conditional = {}

if(typeof conditional === "string") {
    window.alert(conditional)
} else {
    console.log('ops')
}

// for (let index = 0; index < array.length; --index) {
//     const element = array[index];

// }


// const button = document.getElementById("btn")

// button.addEventListener('click', () => { /** todo */})

function iniciar() {
    const firstName = window.prompt("Informe o seu nome: ")

    if(firstName) {
        const lastName = window.prompt("Informe seu sobrenome:")

        const confirmation = window.confirm("Concorda com nossos termos de uso?")

        if(confirmation) {
            const pagina = `
                <p>Olá <strong>${firstName} ${lastName}</strong>,<br> seja bem vindo ao nosso sistema.</p>
            `
            document.write(pagina)
            // alert(``)
        }

    }
}



document.write("<h1>Olá " + nome + " " + sobrenome + " </h1>")



function validar({ firstName, ...rest }) {
    firstName = "Sei la"
    console.log(firstName, rest, { firstName, ...rest })
    
    // const firstName = window.prompt("Informe o seu nome: ")

    // if(firstName)  return alert(firstName)
    // early return
    // return false

    // return firstName ? alert(firstName) : false
}

validar({
    firstName: "Nicholas",
    lastName: "Macedo",
    age: 30,
})

const items = [0,1,2,3]

// items[items.length - 1]

// items.filter()
// items.find() /// 
// 
// items.includes()
// items.map()
// console.log(items.reduce((item, accumulator) => item + accumulator, 0))

const objeto = {
    id: "",
    nome: "",
    sobrenome: "",
    email: "",
    address: {}
}

const keys = Object.keys(objeto)
const values = Object.values(objeto)

keys.forEach(item => console.log(item))
values.forEach(item => console.log(item))

console.log(keys, values)