// function repeatStr(n, s) {
//     const massive = [];
//     for (let i = 0; i < n; i += 1) {
//         massive.push(s);
//     }

//     return massive.join('');
    
// }

// console.log(repeatStr(6, 'hello'));



// function basicOp(operation, value1, value2)
// {
//     let result;
//     switch (operation) {
//         case '+':
//             result = value1 + value2;
//             break;
//         case '-':
//             result = value1 - value2;
//             break;
//         case '/':
//             result = value1 / value2;
//             break;
//         case '*':
//             result = value1 * value2;
//             break;
//     }
//     return result;
// }

// console.log(basicOp('+', 4, 7))

// const countSheep = function (num) {
//     const murmur = [];
//     let sheep;
//     for (let i=1; i <= num; i += 1){
//         sheep = `${i} sheep...`;
//         murmur.push(sheep);
//     }
//     return murmur.join('');
// }

// console.log(countSheep(4));

// function squareSum(numbers){
//     let resultSquare;
//     let resultTotal = 0;
//     for (const number of numbers) {
//         resultSquare = number ** 2;
//         resultTotal += resultSquare;
//     }
//     return resultTotal;
// }

// console.log(squareSum([1, 2, 2]));

// function sum (numbers) {
//     "use strict";
//     let result = 0;
//     for (const number of numbers) {
//         result += number;
//     }
//     return result;
// };

// console.log(sum([3, 2, -2]))

// function removeChar(str){
//     let result = str.slice(1, [str.length - 1]);
//     return result;

// };

// console.log(removeChar('abcd'))

// function simpleMultiplication(number) {
//     let result;

//     if (number % 2 === 0) {
//         result = number * 8;
//     } else {
//         result = number * 9;
//     }
//     return result;
// }

// console.log(simpleMultiplication(2));

// function countSheeps(arrayOfSheep) {
//     let count = 0;
//     for (const sheep of arrayOfSheep) {
//         if (sheep === true) { count += 1 } continue;
//     }
//     return count;
// }

// console.log(countSheeps([true,  true,  true,  false,
//   true,  true,  true,  true ,
//   true,  false, true,  false,
//   true,  false, false, true ,
//   true,  true,  true,  true ,
//     false, false, true, true]))

// const rps = (p1, p2) => {
//     let result;
//     if ((p1 === 'scissors' && p2 === 'paper') || (p1 === 'rock' && p2 === 'scissors') || (p1 === 'paper' && p2 === 'rock')) { result = 'Player 1 won!' }
//     else if ((p1 === 'paper' && p2 === 'scissors') || (p1 === 'scissors' && p2 === 'rock') || (p1 === 'rock' && p2 === 'paper')) { result = 'Player 2 won!' }
//     else { result = 'Draw!'; }
//     return result;
// };

// console.log(rps('rock', 'paper'));

// function reverseWords(str) {
//     let result = str.split('');
//     let reverseArrow = [];
//     let resultReverse;
//     for (let i = result.length - 1; i >= 0; i -= 1) {
//         reverseArrow.push(result[i]);
//     }
//     resultReverse = reverseArrow.join('');
//     return resultReverse;


// }

// console.log(reverseWords('apple'));

function reverseWords(str) {
    let result = str.split(' ');
    let reverseArrow = [];
    let resultReverse;
    for (let i = 0; i <= result.length-1; i += 1) {
        let x = result[i].split('');
        let reverseX = x.reverse();
        let reverseArrowX = reverseX.join('');
        reverseArrow.push(reverseArrowX);
    
    }
    resultReverse = reverseArrow.join(' ');
    return resultReverse;


}

console.log(reverseWords('The quick brown fox jumps over the lazy dog.'));