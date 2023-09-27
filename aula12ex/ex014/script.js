function carregar () {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML(`Agora são ${hora} horas`)
    
    if (hora >= 0 && hora < 12) {
        //BOM DIA
        img.src = 'pexels-vlada-karpovich-4448846 (1).jpg'
    } else if (hora >= 12 && hora < 18) {
        //BOA TARDE
        img.src = 'pexels-georgedesipris-858241.jpg'
    } else {
        //BOA NOITE
        img.src = 'pexels-pixabay-414144.jpg'
    }
}
