const pas = [2, 3, 1, 55];
const tax = [97, 19, 18, 56];


console.log(
    ((arr, ...arrs) =>
        arr.map(
            (val, i) =>
            arrs.reduce(
                (a, arr) => [...a, arr[i]], [val]
            )
        ))(pas.sort(), tax.sort().reverse())
);



const searchString = `public class Person {
    private final String name;
    private final int age; final}
s`;


console.log(
    searchString
    .toLowerCase()
    .match(
        /[a-z]+/g
    )
    .reduce(
        (acc, item) => {
            acc[item] = acc[item] ? acc[item] + 1 : 1;
            return acc;
        }, {}
    )
);