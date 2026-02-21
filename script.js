function verificar() {
    
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var resu = document.querySelector('div#resu')

    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''

        //equivalente a criar uma tag img no html, ou seja, <img id="foto">
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

    if (fsex[0].checked) {
    genero = 'Homem'
} else if (fsex[1].checked) {
    genero = 'Mulher'
}
    const resultados = [
    { genero: 'Homem', idadeMin: 0, idadeMax: 9, imgSrc: 'img/fotobebe-m.png' },
    { genero: 'Homem', idadeMin: 10, idadeMax: 20, imgSrc: 'img/fotojovem-m.png' },
    { genero: 'Homem', idadeMin: 21, idadeMax: 49, imgSrc: 'img/fotoadulto-m.png' },
    { genero: 'Homem', idadeMin: 50, idadeMax: Infinity, imgSrc: 'img/fotoidoso-m.png' },
    { genero: 'Mulher', idadeMin: 0, idadeMax: 9, imgSrc: 'img/fotobebe-f.png' },
    { genero: 'Mulher', idadeMin: 10, idadeMax: 20, imgSrc: 'img/fotojovem-f.png' },
    { genero: 'Mulher', idadeMin: 21, idadeMax: 49, imgSrc: 'img/fotoadulto-f.png' },
    { genero: 'Mulher', idadeMin: 50, idadeMax: Infinity, imgSrc: 'img/fotoidoso-f.png' }
  ];    
    const resultado = resultados.find(r => r.genero === genero && idade >= r.idadeMin && idade <= r.idadeMax);
    if (resultado) {
        img.setAttribute('src', resultado.imgSrc);

}

        resu.style.textAlign = 'center'
        resu.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resu.appendChild(img)
    }
}