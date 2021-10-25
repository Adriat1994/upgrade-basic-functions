const avengers = ['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.'];
console.log(longestStringForLoop(avengers));

function longestStringForLoop(arr) {
  let word = ""; //Esta variable sirve para ir almacenando y comparando cada string, cada nombre de heroe en cada vuelta
  for (let i = 0; i < arr.length; i++) {
    if (word.length < arr[i].length) { //Aquí indicamos que si el string de nuestro array que está en el bucle ahora mismo tiene más longitud que la variable word, ese string que está en el bucle pasa a ser el valor de la variable word
      word = arr[i];  
    } //Esto sirve para que se vayan comparando la longuitud de cada string entre sí, para que al final del bucle la variable word sea el string más largo de nuestro array
  }
  return word;
}

function longestStringReduce(arr) {
  return arr.reduce((a, b) => a.length < b.length ? b : a, "");
}