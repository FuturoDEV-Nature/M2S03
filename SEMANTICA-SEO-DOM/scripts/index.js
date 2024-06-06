
const inputElement = document.querySelector('input')
const buttonForm = document.querySelector('form button')
const listaInteressesElemento = document.querySelector('.list')

var interesses = []
// const itensDaLista = document.querySelectorAll('.list li')

// itensDaLista.forEach((item, indice) => {
//     // console.log(item)
//     item.innerHTML = "Item " + (indice + 1)
// })
function marcarInteresse(event) {
    console.log(event.target)
    event.target.style.textDecoration = 'line-through'
}
// console.log(buttonForm)
// console.log(itensDaLista)
// inputElement.disabled = true
// console.log(inputElement)
buttonForm.addEventListener('click', (event) => {
    const value = inputElement.value
    inputElement.value = ""

    interesses.push(value)

    let elementItem = document.createElement('li')
    elementItem.innerText = value
    elementItem.addEventListener('click', marcarInteresse)
    listaInteressesElemento.appendChild(elementItem)
    // elementItem.classList.add('item')
    // let interessesListaNova = []

    // interesses.forEach((item) => {
    //     interessesListaNova.push(`<li>${item}</li>`)
    // })
    // listaInteressesElemento.innerHTML = ""

//    interesses.forEach((item) => {
//         let elementItem = document.createElement('li')
//          elementItem.innerText = item
//         // elementItem.classList.add('item')
//         listaInteressesElemento.appendChild(elementItem)
//         //  return elementItem
//     })

    // listaInteressesElemento.appendChild(interessesElementos)

    // console.log(interesses)
    // listaInteressesElemento.innerHTML = interessesElementos
    // console.log('clicou')
})

// buttonForm.innerHTML = "<strong>testando...</strong>"
// buttonForm.innerText = "<strong>testando...</strong>"