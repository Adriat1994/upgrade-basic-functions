console.log(longestStringForLoop(['Hulk', 'Thor', 'IronMan', 'Captain A.', 'Spiderman', 'Captain M.']));

function longestStringForLoop(arr) {
  let word = "";
  for (let i = 0; i < arr.length; i++) {
    if (word.length < arr[i].length) {
      word = arr[i];
    }
  }
  return word;
}

function longestStringReduce(arr) {
  return arr.reduce((a, b) => a.length < b.length ? b : a, "");
}