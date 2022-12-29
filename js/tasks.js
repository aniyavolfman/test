// function highAndLow(numbers) {
//     const arr = numbers.split(' ');
//     const minNumber = Math.min(...arr);
//     const maxNumber = Math.max(...arr);
//     return [Math.min(...arr), Math.max(...arr)].join(' ');
// }

// console.log(highAndLow("1 2 -3 4 5"));

function squareDigits(num){
    const arr = String(num).split('');
    for (let i = 0; i < arr.length; i+=1) {
        arr[i] = Number(arr[i])**2;
    }

    return Number(arr.join(''));
}
console.log(squareDigits(9119));