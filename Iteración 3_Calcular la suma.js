const numbers = [1, 2, 3, 5, 45, 37, 58];
console.log(sumAll(numbers));

function sumAll(arr) {
  let suma = 0;      //Esta variable nos servirá para ir sumando todos los números del array y almacenarlos en la variable
  for (let i = 0; i < arr.length; i++) {
      suma += arr[i];
  }
  return suma;
}