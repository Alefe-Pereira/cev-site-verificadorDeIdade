function verificar() {
    //adicionar o ano atual, para comparar com o ano de nascimento
    var data = new Date()
    var ano = data.getFullYear()

    //pegar o valor do input, para comparar com o ano atual
    var fano = document.getElementById('txtano')
    var resu = document.querySelector('div#resu')
    
    //verificar se o campo de ano de nascimento está vazio ou se é maior que o ano atual
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        window.alert("Verifique os dados e tente novamente!")
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''

    //equivalente a criar uma tag img no html, ou seja, <img id="foto">
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')

//verificar qual radio button foi selecionado, para definir o gênero
    if (fsex[0].checked) {
    genero = 'Homem'
} else if (fsex[1].checked) {
    genero = 'Mulher'
}

//definir as faixas etárias e as imagens correspondentes para cada gênero e idade
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

  //encontrar o resultado correspondente ao gênero e idade usando o método find(o método find retorna o primeiro elemento do array que satisfaz a condição fornecida)
  //a letra r é apenas um nome de variável para representar cada elemento do array resultados, ou seja, cada objeto que contém as propriedades genero, idadeMin, idadeMax e imgSrc
  //a condição verifica se o gênero do resultado é igual ao gênero selecionado e se a idade está dentro da faixa definida por idadeMin e idadeMax
    const resultado = resultados.find(r => r.genero === genero && idade >= r.idadeMin && idade <= r.idadeMax);
    if (resultado) {
        img.setAttribute('src', resultado.imgSrc);

}
//exibir o resultado na div resu, centralizando o texto e adicionando a imagem correspondente

        resu.style.textAlign = 'center'
        resu.innerHTML = `Detectamos ${genero} com ${idade} anos.`
        resu.appendChild(img)
    }
}