const nameFinder = [
    'Peter',
    'Steve',
    'Tony',
    'Natasha',
    'Clint',
    'Logan',
    'Xabier',
    'Bruce',
    'Peggy',
    'Jessica',
    'Marc'
  ];

  function finderName(list, name) {

    let resultado = {
      'encontrado':false,
      'posicion':null
    }

    for (let i = 0; i < list.length; i++) {
      
        

        if (name === list[i]) {
          resultado.encontrado = true;
          resultado.posicion = i;
          
          return resultado;
           
        }
    }
    return resultado;
  }

console.log(finderName(nameFinder, 'Clint'));

