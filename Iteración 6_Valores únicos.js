const duplicates = [
    'sushi',
    'pizza',
    'burger',
    'potatoe',
    'pasta',
    'ice-cream',
    'pizza',
    'chicken',
    'onion rings',
    'pasta',
    'soda'
  ];
  function removeDuplicates(arr) {
    let unicos = [];        //Vamos a crear una variable nueva que sea un array vacio, donde se van a ir introduciendo los strings que no sean repetidos
    for (var i = 0; i < arr.length; i++) {
        
        if (!unicos.includes(arr[i])) {         //Lo que le decimos al bucle es que si la variable "unicos" NO incluye el string del array en el que está el bucle, este string se pushea a la variable unicos
            unicos.push(arr[i]);
        }
    }
    return unicos;
  }

console.log(removeDuplicates(duplicates));