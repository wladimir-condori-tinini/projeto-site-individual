function carrossel(){
    var tamanho_atual = img.style.marginLeft
    var distacia = 500
    var sempx = Number(tamanho_atual.replace("px",""))
    var limitemax = -1500

    if( sempx == limitemax){
        img.style.marginLeft = "0px"
    }else{
        img.style.marginLeft = (sempx - distacia)+"px"
    }
}

setInterval(carrossel, 1800)