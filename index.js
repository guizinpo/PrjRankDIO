let saldo = funcRank(87, 12)

function funcRank(vitorias, derrotas){
    
    saldoVitorias = vitorias - derrotas

    if(saldoVitorias <= 10){
        console.log("O Herói tem de saldo " + saldoVitorias + " e está no nível Ferro")
    }

    else if(saldoVitorias > 10 && saldoVitorias <= 20){
        console.log("O Herói tem de saldo " + saldoVitorias + " e está no nível Bronze")
    }

    else if(saldoVitorias > 20 && saldoVitorias <= 50){
        console.log("O Herói tem de saldo " + saldoVitorias + " e está no nível Prata")
    }

    else if(saldoVitorias > 50 && saldoVitorias <= 80){
        console.log("O Herói tem de saldo " + saldoVitorias + " e está no nível Ouro")
    }

    else if(saldoVitorias > 80 && saldoVitorias <= 90){
        console.log("O Herói tem de saldo " + saldoVitorias + " e está no nível Diamante")
    }

    else if(saldoVitorias > 90 && saldoVitorias <= 100){
        console.log("O Herói tem de saldo " + saldoVitorias + " e está no nível Lendário")
    }

    else{
        console.log("O Herói tem de saldo " + saldoVitorias + " e está no nível Imortal")
    }

    return saldoVitorias
}