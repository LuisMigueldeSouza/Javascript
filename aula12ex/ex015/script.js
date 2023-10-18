function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente!')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var gênero =  ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

        if (fsex[0].checked) {
            gênero = 'Homem'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'bebem.jpg')
            } else if (idade >= 10 && idade < 21) {
                //JOVEM
                img.setAttribute('src', 'jovemm.jpg')
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'adultom.jpg')
            } else {
                //IDOSO
                img.setAttribute('src', 'idosom.jpg')
            }

        } else if (fsex[1].checked) {
            gênero = 'Mulher'
            if (idade >= 0 && idade < 10) {
                //CRIANÇA
                img.setAttribute('src', 'bebef.jpg')
            } else if (idade >= 10 && idade < 21) {
                //JOVEM
                img.setAttribute('src', 'jovemf.jpg')
            } else if (idade < 50) {
                //ADULTO
                img.setAttribute('src', 'adultof.jpg')
            } else {
                //IDOSO
                img.setAttribute('src', 'idosof.jpg')
            }
        } 
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${gênero} com ${idade} anos.`
        res.appendChild(img)
    }
}