function calcularSenha(senha){
    let senhaBin = []
    let verificar = senha.toString()
    let contarZero = 0
    let contarUm = 0
    let i = 0
    let j = 0
    
    while(i<=9){
        for(j; j<verificar.length; j+=11){
            if(verificar[j] == 0){
            contarZero +=1
            }
            else{
            contarUm +=1
            }
        }
        if(contarUm > contarZero){
            j = 0
            senhaBin.push(1)
            contarUm = 0
            contarZero = 0
            i++
            j = i
        }
        else if(contarUm == contarZero){
            j = 0
            senhaBin.push(1)
            contarUm = 0
            contarZero = 0
            i++
            j = i
        }
        else{
            j = 0
            senhaBin.push(0)
            contarZero = 0
            contarUm = 0
            i++
            j = i 
        }
        
    }
    let senhaNumero = senhaBin.map(Number)
    let senhaSemvirgula= senhaNumero.join('')
    let senhaDecimal = parseInt(senhaSemvirgula, 2)
    
    return senhaDecimal
}   


    
    
    

  

calcularSenha(["0110100000","1001011111","1110001010","0111010101","0011100110","1010011001","1101100100","1011010100","1001100111","1000011000"])