let ranquer = null; 
let raquerFinal = null
let calculaR = ranqueadaV(200,10);
let resultado = calculadoraRanqueada(calculaR);

function ranqueadaV(v,d){
    let resultado = v - d;
    return resultado
}

function calculadoraRanqueada(v){
    let resultado = v;
    
    if(resultado<=10){
        ranquer = "ferro"
    } else if (resultado > 10 && resultado <= 20 ){
        ranquer = "bronze"
    } else if (resultado > 20 && resultado <= 50){
        ranquer = "prata"
    } else if (resultado > 50 && resultado <= 80){
        ranquer = "ouro"
    }  else if (resultado > 80 && resultado <= 90){
        ranquer = "Diamante"
    }  else if (resultado > 90 && resultado <= 100){
        ranquer = "Lendario"
    }  else if (resultado > 100){
        ranquer = "Imortal"
    } else {
        ranquer = "sucata"
    }
    return ranquer
}


console.log(`O Heroi tem o saldo de ${calculaR} vitorias, e seu nivel atual é ${resultado}`)