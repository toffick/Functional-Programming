// 1.FUNC
const array = [1, 3, 4, 6, 8, 9, 11, 500]
const arrayLength = array.length

function find(item, first = 0, last = arrayLength - 1) {
    if (item > array[arrayLength - 1] || item < array[0]) return false;
    const middleIndex = Math.floor(first + (last - first) / 2);
    const currentValue = array[middleIndex];
    if (last - 1 === first) return Math.abs(array[first] - item) > Math.abs(array[last] - item) ? last : first;
    return item === currentValue ? middleIndex :
        item > currentValue ?
        find(item, middleIndex, last) :
        find(item, first, middleIndex);
}

console.log(find(8))


// 1.IMPER
function findImper(data, item) {
    let i = 0,
        j = data.length,
        k;

    while (i < j) {
        k = Math.floor((i + j) / 2);
        if (item <= data[k]) j = k;
        else i = k + 1;
    }

    if (data[i] === item) return i;
    else return -1;
}


let nearestIndex = findImper(array, 8);
console.log(nearestIndex);