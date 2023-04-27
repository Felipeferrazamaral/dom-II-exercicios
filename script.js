const textoCriado = document.getElementById('botao')

const adicionaItem = (event) => {
    
    const chamandoDoc = document.getElementById('container')
    const criandoItem =  '<article class="item" onclick="removeItem(event)"></article>'
    chamandoDoc.innerHTML += criandoItem


}


const removeItem = (event) => {
    event.target.remove()
}