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

//verificando o sexo e a idade para definir a imagem a ser exibida

        //homem
        if (fsex[0].checked) {
            genero = 'Homem'

            //criança
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/fotobebe-m.png')
            }

            //jovem
            else if (idade < 21) {
                img.setAttribute('src', 'img/fotojovem-m.png')
            }

            //adulto
            else if ( idade < 50) {
                
                img.setAttribute('src', 'img/fotoadulto-m.png')
            }

            //idoso
            else {
                
                img.setAttribute('src', 'img/fotoidoso-m.png')
            }

        //mulher
        } else if (fsex[1].checked) {
            genero = 'Mulher'

            //criança
            if (idade >= 0 && idade < 10) {
                img.setAttribute('src', 'img/fotobebe-f.png')
            }

            //jovem
            else if (idade < 21) {
                img.setAttribute('src', 'img/fotojovem-f.png')
            }

            //adulto
            else if ( idade < 50) {
                
                img.setAttribute('src', 'img/fotoadulto-f.png')
            }

            //idoso
            else {
                
                img.setAttribute('src', 'img/fotoidoso-f.png')
            }

        }
        resu.style.textAlign = 'center' 
        resu.innerHTML = `Detectamos ${genero} com ${idade-1} ou ${idade} anos.`  
        resu.appendChild(img)
        

       
    }
}