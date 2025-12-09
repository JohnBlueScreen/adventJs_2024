
const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'},
  { name: 'AAAAAaaaaa', color: 'rojo' },
  { name: 'Nnnnnnnn', color: 'rojo'}
]

const contarOvejas = (obj) =>{

    const arrayfiltrado =obj.filter(e => e.name.toLowerCase().includes('a') 
                                    && e.name.toLowerCase().includes('n')
                                    && e.color.includes('rojo')
                                    )
    return arrayfiltrado

  

}



const ovejasFiltradas = contarOvejas(ovejas)

console.log(ovejasFiltradas)