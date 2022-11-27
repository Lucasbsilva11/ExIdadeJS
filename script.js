function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano = document.getElementById('txtano')
    var res = document.getElementById('res')

    if (fano.value.length == 0 || fano.value > ano){
        window.alert('Verifique os dados e tente novamente!')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        res.innerHTML = `idade calculada: ${idade}`
        var genero = ' '
        var img = document.createElement('img') //atribuindo uma id 
        img.setAttribute('id', 'foto') //atribuindo uma id 
        if(fsex[0].checked){
            genero = 'um homem'
            if(idade >= 0 && idade < 10){
                genero = 'um menino'
                document.getElementById('photo').innerHTML = "<img src ='bebe-M.png'>"
                document.getElementById('photo').style.textAlign = 'center'
                // criança

            }else if (idade < 21){
                document.getElementById('photo').innerHTML = "<img src ='jovem-H.png'>"
                document.getElementById('photo').style.textAlign = 'center'
                // jovem
            
            }else if (idade < 50){
                document.getElementById('photo').innerHTML = "<img src ='adulto-H.png'>"
                document.getElementById('photo').style.textAlign = 'center'
                //adulto
            
            }else{
                document.getElementById('photo').innerHTML = "<img src ='idoso-H.png'>"
                document.getElementById('photo').style.textAlign = 'center'
                //idoso
            }


        }else if (fsex[1].checked){
            genero = 'uma mulher'
            if(idade >= 0 && idade < 10){
                genero = 'uma menina'
                document.getElementById('photo').innerHTML = "<img src ='bebe-F.png'>"
                document.getElementById('photo').style.textAlign = 'center'
                // criança

            }else if (idade < 21){
                document.getElementById('photo').innerHTML = "<img src ='jovem-M.png'>"
                document.getElementById('photo').style.textAlign = 'center'
                // jovem
            
            }else if (idade < 50){
                document.getElementById('photo').innerHTML = "<img src ='adulto-M.png'>"
                document.getElementById('photo').style.textAlign = 'center'
                //adulto
            
            }else{
                document.getElementById('photo').innerHTML = "<img src ='idoso-M.png'>"
                document.getElementById('photo').style.textAlign = 'center'
                //idoso
            }
        }

        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos <strong>${genero}</strong> com <strong>${idade} anos.</strong>`

    }


}

