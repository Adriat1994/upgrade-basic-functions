const mixedElements = [6, 1, 'Rayo', 1, 'vallecano', '10', 'upgrade', 8, 'hub'];

function averageWord(arr) {
  let sumaValor = 0;
  
  for (let i = 0; i < arr.length; i++) {
      if (typeof arr[i] === "string") {
        sumaValor += arr[i].length;
        
      }
      else {
          
          sumaValor += arr[i];
      }
  }
  return sumaValor;
}

console.log(averageWord(mixedElements));