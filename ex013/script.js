function atualiarTempo() {
    var horaAtual = new Date()
    var horaNaTela = horaAtual.getHours()
    var minutoNaTela = horaAtual.getMinutes()
    //var segundoNaTela = horaAtual.getSeconds()
    var resp = window.document.getElementById('resp')
    var backGroundColor = window.document.getElementById('bg') 
    var imagem = window.document.getElementById('image')
    if (horaNaTela >= 0 && horaNaTela <= 11) {
    resp.innerHTML = `Bom dia! São ${horaNaTela}:${minutoNaTela}`
        backGroundColor.style.background =  'rgb(221, 221, 101)' 
        imagem.src = "imagens/morning.jpg"} 
    if (horaNaTela > 11 && horaNaTela < 18) {
        resp.innerHTML = `Boa tarde! São ${horaNaTela}:${minutoNaTela}`
        backGroundColor.style.background = 'rgb(145, 85, 70)'
        imagem.src = "imagens/sunset.jpg"
    }
    if (horaNaTela > 17 && horaNaTela <= 23) {
        resp.innerHTML = `Boa noite! São ${horaNaTela}:${minutoNaTela}`
        backGroundColor.style.background = 'rgba(0, 0, 0, 0.9)'
        imagem.src = "imagens/night.jpg"
    }
}
setInterval(function(){ atualiarTempo() }, 1000);