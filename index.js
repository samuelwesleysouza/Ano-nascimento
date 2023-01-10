let resultado = document.querySelector('#resultado')
let date = document.querySelector('#date')
let name = document.querySelector('#name')


function convercaoreal() {
    if (date.value !== '') {
        let anoatual = parseInt(2022)
        let convercao = (anoatual - date.value)
        resultado.innerHTML = 'Parabéns sua idade é '  + convercao + ' anos '

    } else {
        resultado.innerHTML = alert('Preencha os campos')
        limpar()
    }
}
function limpar() {
    document.getElementById('date').value = ""
    document.getElementById('name').value = ""
    document.getElementById('resultado').innerHTML = ""


}

