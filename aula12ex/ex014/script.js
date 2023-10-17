function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    
    msg.innerHTML = `Agora são ${hora} horas.`

    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'Manha.jpg'
        document.body.style.backgroundColor = '#e2cd9f'
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE
        img.src = 'Tarde.jpg'
        document.body.style.backgroundColor = '#b9846f'
    } else {
        //BOA NOITE
        img.src = 'Noite.png'
        document.body.style.backgroundColor = '#515154'
    }
}
