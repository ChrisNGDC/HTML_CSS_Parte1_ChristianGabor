const gold = Array.from(document.querySelectorAll('td.gold'))
const silver = Array.from(document.querySelectorAll('td.silver'))
const bronce = Array.from(document.querySelectorAll('td.bronce'))
const total = Array.from(document.querySelectorAll('td.total'))

function sortASC(lista) {
    lista.sort((a,b) => {return Number(b.innerText) - Number(a.innerText)})
}

function updateSize(lista) {
    lista.forEach(element => {
        let size = Math.max(Math.log(Number(element.innerText)) * 0.4, 0.7)
        element.style.fontSize = `${size}em`
    });
}

function bold(lista) {
    let cantidad = 2
    let anterior = Number(lista[0].innerText)
    for (let i = 0; i < lista.length; i++) {
        if (cantidad > 0) {
            if (Number(lista[i].innerText) == Number(anterior)) {
                lista[i].style.fontWeight = "bold"
            } else if (Number(lista[i].innerText) < Number(anterior)) {
                lista[i].style.fontWeight = "bold"
                anterior = Number(lista[i].innerText)
                cantidad--
            }
        }
    }
}


function applyToAll(listas, callbacks) {
    callbacks.forEach(callback => {
        listas.forEach(lista => {
            callback(lista)
        })
    });
}

applyToAll([gold, silver, bronce, total], [updateSize, sortASC, bold])