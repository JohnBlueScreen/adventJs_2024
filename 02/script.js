const carta = 'bici coche balón _playstation bici coche peluche'

const cartaArray = carta.split(' ')

const cartaFinal =[]

for (let i = 0 ; i< cartaArray.length ; i++ ){
     let palabra = cartaArray[i]
     if (palabra.charAt(0) != '_'){
       cartaFinal.push(palabra)
     }
     
    }
    
    
const contador = {}

for (let j = 0; j < cartaFinal.length; j++) {
    let regalo = cartaFinal[j]
    
    // Si el regalo ya existe en el contador, sumar 1
    // Si no existe, inicializarlo con 1
    if (contador[regalo]) {
        contador[regalo] += 1
    } else {
        contador[regalo] = 1
    }
}

console.log(contador)
// Resultado: { bici: 2, coche: 2, balón: 1, peluche: 1 }


    

