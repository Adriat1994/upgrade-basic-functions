const numbers = [12, 21, 38, 5, 45, 37, 6];

function average(arr) {
  let suma = 0;         //De nuevo, esta variable sirve para ir almacenando los datos
  for (let i = 0; i < arr.length; i++) {        
      suma = suma + arr[i];     //Con esto, vamos almacenando en la variable "suma" los valores del array, sumando uno al siguiente "12+21+38..."
  }
  return suma / arr.length;     //Con esto, a la variable "suma", que al acabar el bucle será el sumatorio de todos los valores del array, le dividimos el número de componentes que componen nuestro array
}

console.log(average(numbers))