function carregar() {
    var fInicio = document.getElementById('inicio')
    var fFim = document.getElementById('fim')
    var fPasso = document.getElementById('passo')
    var res = document.getElementById('res')
    var p = document.getElementById('cont')
    
    var inicio = Number(fInicio.value)
    var fim = Number(fFim.value)
    var passo = Number(fPasso.value)

    if (fim == 0) {
        alert('[ERRO] O final da conta não pode ser zero ou estar vazio!')
    } else if(fInicio.value.length == 0 || fPasso.value.length == 0) {
        alert('[ERRO] Nenhuma caixa pode estar vazia!')
    } else if(passo == 0) {
        alert('[ERRO] O passo não pode ser igual a zero!')
    }  else if (fim <= inicio) {
        window.alert('[ERRO] O final não pode ser maior ou igual ao início')
    } else {
        res.innerHTML = 'contando '
        for(let c = inicio; c <= fim; c += passo) {
            res.innerHTML += `${c} `
        }

        res.style.font = 'normal 18pt arial'
    }
    
}

