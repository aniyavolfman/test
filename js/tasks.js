// function highAndLow(numbers) {
//     const arr = numbers.split(' ');
//     const minNumber = Math.min(...arr);
//     const maxNumber = Math.max(...arr);
//     return [Math.min(...arr), Math.max(...arr)].join(' ');
// }

// console.log(highAndLow("1 2 -3 4 5"));

// function squareDigits(num){
//     const arr = String(num).split('');
//     for (let i = 0; i < arr.length; i+=1) {
//         arr[i] = Number(arr[i])**2;
//     }

//     return Number(arr.join(''));
// }
// console.log(squareDigits(9119));

// function findShort(s) {
//     const array = s.split(' ');
//     const arrayLengths = [];
//     array.map(element => {
//         const elementLength = element.length;
//         arrayLengths.push(elementLength);
//     })

//     return Math.min(...arrayLengths);
// }

// console.log (findShort("bitcoin take over the world maybe who knows perhaps"));


// function timeCorrect(timestring) {
//     if (timestring === '') { return '' };
//     if (timestring === null || timestring.includes(';') || !timestring.includes(':') || timestring.includes(NaN)) { return null };


//     const array = timestring.split(':')
    
//     if (array[2] >= 0 && array[2] <= 59) { array[2] } else { array[2] = String(Number(array[2]) % 60); array[1] = Number(array[1]) + 1 };
    
//     if (array[1] >= 0 && array[1] <= 59) { array[1] } else { array[1] = String(array[1] % 60); array[0] = Number(array[0]) + 1 };
    
//     if (array[0] >= 0 && array[0] <= 23) { array[0] } else { array[0] = String(array[0] % 24) };
    
//     const arrayChanged = [];

//     array.forEach(element => {
//         if (element.length < 2) {
//             element = 0 + element;
//         };
//         arrayChanged.push(element);
//     });
    

//     return arrayChanged.join(':').includes(NaN) ? null : arrayChanged.join(':');
// }


// console.log(timeCorrect("0a:1c:22"))

// Test.assertEquals(timeCorrect("09:10:01"), "09:10:01");
// Test.assertEquals(timeCorrect("11:70:10"), "12:10:10");
// Test.assertEquals(timeCorrect("19:99:09"), "20:39:09");
// Test.assertEquals(timeCorrect("19:99:99"), "20:40:39");
// Test.assertEquals(timeCorrect("24:01:01"), "00:01:01");
// Test.assertEquals(timeCorrect("52:01:01"), "04:01:01");
// Test.assertEquals(timeCorrect(null), null);
// Test.assertEquals(timeCorrect(""), "");
// Test.assertEquals(timeCorrect("001122"), null);
// Test.assertEquals(timeCorrect("00;11;22"), null);
// Test.assertEquals(timeCorrect("0a:1c:22"), null);

// function disemvowel(str) {
//     const array = str.split('');
//     const newArray = array.filter((element) => element.toLowerCase() !== 'a' && element.toLowerCase() !== 'e' && element.toLowerCase() !== 'i' && element.toLowerCase() !== 'o' && element.toLowerCase() !== 'u');
//     return newArray.join(' ');
// }

// console.log(disemvowel("This website is for losers LOL!"))

// function getSum( a,b )
// {
//     if (a === b) { return a }
//     let sum = 0;
//     if ( a < b)
//     {for (let i = a; i <= b; i += 1)
//     {
//         array.push(i);
//         sum += i;
//     }
//     }
//     if ( a > b)
//     {for (let i = b; i <= a; i += 1)
//     {
//         sum += i;
//     }
//     }

//     return sum;


// }

// console.log(getSum(583,312))

// function stray(numbers) {
//     const array = [...numbers].sort((a, b) => (a - b));
//     let number;
//     for (let i = 0; i < array.length; i += 1){
//         if (array[0] !== array[1]) { number = array[0] }
//         else {number = array[array.length-1]}
//     }
//     return number;
// }

// console.log(stray([2, 1, 1]))

// function filter_list(l) {
//     return l.filter(value => typeof value === 'number')
// }
// console.log(filter_list([1, 2, 'a', 'b']))

// function isLeapYear(year) {
//   if ((year % 4 === 0 && year % 100 !== 0 )|| (year % 400 === 0 && year % 100 === 0)) {
//         return true;
//     } else { return false };
// }
// console.log(isLeapYear(2000))

// function unscrambleEggs(word){
//     return word.split('egg').join('')
// }

// console.log(unscrambleEggs("ceggodegge heggeregge"))
