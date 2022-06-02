console.log(8 % 4);

//я нахуй фронтендєр

function returnNeighboringNumbers(number) {
    let arr = [];
    for (let i = 0; i < 3; i++) {
        arr[i] = number - 1 + i;
    }

    return arr;
}
console.log(returnNeighboringNumbers(10));





function getMathResult(a, b) {
    let result = '';

    if (typeof (b) !== 'number' || b <= 1) { 
        return a;
    } else {
        for (let i = 1; i <= b; i++) {
            result += `${i * a}`;
            if (i * a === a * b) {
                break;
            } else {
                result += `---`;
            }
        }
    }

    return result;
    
}

console.log(getMathResult(3, `1`));