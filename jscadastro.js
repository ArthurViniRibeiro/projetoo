function enviar(event){
    event.preventDefault()
    var animais = JSON.parse(localStorage.getItem('animais') || "[]")

    var novoanimal = {
        sexo:event.target.sexo.value,
        porte:event.target.porte.value,
        idade:event.target.idade.value,
        cor1:event.target.cor1.value,
        cor2:event.target.cor2.value,
        raca:event.target.raca.value,
        coleira:event.target.coleira.value,
        descricao:event.target.descricao.value,
        situacao:event.target.situacao.value,
        localizacao:event.target.localizacao.value,
        foto:event.target.foto.value
    }

    animais.push(novoanimal)
    animais = JSON.stringify(animais)
    localStorage.setItem('animais',animais)


    alert('formulario enviado pode voltar para o inicio')
}