function calcu() {
    const data = new Date()
    let dias = data.getDate()
    let meses = data.getMonth() + 1
    let anos = data.getFullYear()
    var d = document.querySelector('#dia')
    var m = document.querySelector('#mes')
    var a = document.querySelector('#ano')
    var rd = document.querySelector('#rd')
    var rm = document.querySelector('#rm')
    var ra = document.querySelector('#ra')
    
    var dia = dias - d.value
    var mes = meses - m.value
    var ano = anos - a.value

        rd.textContent = dia
        rm.textContent = mes
        ra.textContent = ano
}

function pisca() {
    var cor = document.querySelector('#color')
    var x = document.querySelector('body')
    x.style.backgroundColor = cor.value

}