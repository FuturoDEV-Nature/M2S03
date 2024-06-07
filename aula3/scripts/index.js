const inputElemento = document.querySelector('input')
const buttonElemento = document.querySelector('button')
const listaElemento = document.querySelector('.list')


/** Registrar os eventos */
buttonElemento.addEventListener('click', () => {
    const valorInput = inputElemento.value

    if(valorInput) {

        const itemElemento = document.createElement('li')
        itemElemento.innerText = valorInput

        // listaElemento.prepend(itemElemento) // incluir como primeiro filho 
        listaElemento.appendChild(itemElemento) // incluir como ultimo filho
        
    } else {
        alert('Informe um valor')
    }
})