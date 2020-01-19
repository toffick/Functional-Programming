//2.FUNC
const matrix = [
    [3, 2, 9], //9
    [11, 3, 5], //11
    [123, 4, 9] //123
];


console.log(Math.min(...matrix.map(arr => Math.max(...arr))));


//2.IMPERATIVE

let max;
let min;

matrix.forEach(row => {
    row.forEach(item => {
        if (item > max || max === undefined)
            max = item;
    })
    if (max < min || min === undefined)
        min = max;
})

console.log(min);