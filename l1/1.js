let result = '';

function foo(rows, currentRow = 0) {
    if (rows === currentRow) return result;

    result = result.concat('  '.repeat((rows - currentRow)));

    for (let i = 0; i <= currentRow; i++)
        result = result.concat(`${'    '}${factorial(currentRow) / (factorial(i) * factorial(currentRow - i))}`);

    result = result.concat('\n');
    foo(rows, ++currentRow);
}

function factorial(x) {
    if (x === 0)
        return 1;
    return x * factorial(x - 1);
}

console.log(foo(10))
console.log(result)