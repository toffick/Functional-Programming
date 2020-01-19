let rows = 10;

const compute = (rowsCount, row = 0) => {
    if (row === rowsCount) return;

    const delta = rowsCount - row;

    let shift = '    '.repeat(delta - 1);

    for (let i = 0; i <= row; i++) {
        const value = factorial(row) / (factorial(i) * factorial(row - i))
        shift += `      ${value}`;
    }

    console.log(shift)
    return compute(rowsCount, ++row)

}

const factorial = (x) => {
    if (x === 0)
        return 1;
    return x * factorial(x - 1);
}

compute(rows)