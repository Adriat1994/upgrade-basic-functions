const counterWords = [
    'code',
    'repeat',
    'eat',
    'sleep',
    'code',
    'enjoy',
    'sleep',
    'code',
    'enjoy',
    'upgrade',
    'code'
];


function repeatCounter(array, value) {
    let count = 0;
    array.forEach((v) => (v === value && count++));
    return count;
}

console.log(repeatCounter(counterWords, "code"));
console.log(repeatCounter(counterWords, "repeat"));
console.log(repeatCounter(counterWords, "eat"));
console.log(repeatCounter(counterWords, "sleep"));
console.log(repeatCounter(counterWords, "enjoy"));
console.log(repeatCounter(counterWords, "upgrade"));