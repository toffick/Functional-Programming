const coinsTypes = new Array(2).fill(0).map((_, i) => i + 1);

function getAllChanses(amount, typeIndex) {
    if (amount < 0 || typeIndex < 0) return 0;
    if (amount === 0 || typeIndex === 0) return 1;
    return getAllChanses(amount, typeIndex - 1) +
        getAllChanses(amount - coinsTypes[typeIndex], typeIndex);
}

console.log(getAllChanses(8, coinsTypes.length - 1));