// function highAndLow(numbers) {
//     const arr = numbers.split(' ');
//     const minNumber = Math.min(...arr);
//     const maxNumber = Math.max(...arr);
//     return [Math.min(...arr), Math.max(...arr)].join(' ');
// }

// console.log(highAndLow("1 2 -3 4 5"));

//function squareDigits(num){
//   const arr = String(num).split('');
//  for (let i = 0; i < arr.length; i+=1) {
//       arr[i] = Number(arr[i])**2;
//   }

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

// [-2, 1, -3, 4, -1, 2, 1, -5, 4]



// var maxSequence = function (arr) {
//     let localMax = 0;
//     let globalMax = 0;
    
//     for (let i = 0; i < arr.length; i += 1){
//         localMax = Math.max(arr[i], arr[i] + localMax);
//         if (localMax > globalMax) {
//             globalMax = localMax;
//         }
//     }
//     return globalMax;
// }



// console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]))

//----------------------- BATTLE FIELD

// const CHECKED = 0;

// const DELTAS = [
//   {
//     x: 0,
//     y: 1
//   },
//   {
//     x: 1,
//     y: 0,
//   },
//   {
//     x: 0,
//     y: -1,
//   },
//   {
//     x: -1,
//     y: 0
//   }
// ];

// const isOnBoard = (boardLength, x, y) => x >= 0 && x < boardLength && y >= 0 && y < boardLength;

// const isNotChecked = (cell) => cell !== CHECKED;

// const isValidNextDeck = (currentDeck, nextDeck, isHorizontal) => {
//   const axis = isHorizontal ? 'x' : 'y';
//   return nextDeck[axis] === currentDeck[axis]
// }

// const isNotPrevDeck = (currentDeck, prevDeck) => (currentDeck.x !== prevDeck?.x) || (currentDeck.y !== prevDeck?.y)


// const getNeighboursDecks = (board, currentDeck) => DELTAS.map(
//   delta => ({x: currentDeck.x + delta.x, y: currentDeck.y + delta.y})
//   ).filter(({x, y}) => isOnBoard(board.length, x, y));


// const getNotCheckedNeighboursDecks = (board, currentDeck, prevDeck) => getNeighboursDecks(board, currentDeck)
// .filter(({x, y}) => isNotChecked(board[y][x] && isNotPrevDeck(currentDeck, prevDeck)))


// const SHIPS = {
//   '4': 1,
//   '3': 2,
//   '2': 3,
//   '1': 4
// }

// function validateBattlefield(field) {
//   // write your magic here

//   for(let y = 0; y < field.length; y++){
//     for(let x = 0; x < field.length; x++){
//       const currentField = field[y][x]; // 1
      
//       if(currentField === CHECKED){
//         continue;
//       }
      
//       const shipSize = validateShip(field, 1, { x, y }, null)
      
//       if(shipSize === -1){
//         return false;
//       }
      
//       SHIPS[shipSize] -= 1;
      
//     }
//   }
  
//   return Object.values(SHIPS).every(count => count === 0);
// }


// function validateShip(board, length, currentDeck, prevDeck, isHorizontal = null){
  
//   if(length > 4){
//     return -1;
//   }
  
//   board[currentDeck.y][currentDeck.x] = 0;
  
  
//   const neighboursDecks = getNotCheckedNeighboursDecks(board, currentDeck, prevDeck)
  
//   if(neighboursDecks.length === 0){
//     if(prevDeck === null){
//       return 1;
//     }
    
//     return length;
//   }
  
  
//   if(neighboursDecks.length === 1){
//     const nextDeck = neighboursDecks[0];
    
    
//     if(isHorizontal === null){
//       return validateShip(board, length + 1, nextDeck, currentDeck, nextDeck.x === currentDeck.x);
//     }
    
    
//     if(isValidNextDeck(currentDeck, nextDeck, isHorizontal)){
//       return validateShip(board, length + 1, nextDeck, currentDeck, isHorizontal);
//     }
    
//     return -1;
    
//   }
  
//   return -1;
  
// }

// -------------------------------


// const OPERATION_SIGNS = {
//   PLUS: '+',
//   MINUS: '-',
//   TIMES: '*',
//   DIVIDE: '/',
// }

// const OPERATIONS = {
//   [OPERATION_SIGNS.PLUS]: (firstNum, secondNum) => firstNum + secondNum,
//   [OPERATION_SIGNS.MINUS]: (firstNum, secondNum) => firstNum - secondNum,
//   [OPERATION_SIGNS.TIMES]: (firstNum, secondNum) => firstNum * secondNum,
//   [OPERATION_SIGNS.DIVIDE]: (firstNum, secondNum) => Math.floor(firstNum / secondNum),
// }

// const getNumberOrCalc = (calcFunction, number) => {
//   return calcFunction ? calcFunction(number) : number;
// }

// const zero = (calcFunction) => getNumberOrCalc(calcFunction, 0);
// const one = (calcFunction) => getNumberOrCalc(calcFunction, 1);
// const two = (calcFunction) => getNumberOrCalc(calcFunction, 2);
// const three = (calcFunction) => getNumberOrCalc(calcFunction, 3);
// const four = (calcFunction) => getNumberOrCalc(calcFunction, 4);
// const five = (calcFunction) => getNumberOrCalc(calcFunction, 5);
// const six = (calcFunction) => getNumberOrCalc(calcFunction, 6);
// const seven = (calcFunction) => getNumberOrCalc(calcFunction, 7);
// const eight = (calcFunction) => getNumberOrCalc(calcFunction, 8);
// const nine = (calcFunction) => getNumberOrCalc(calcFunction, 9);



// const plus = (number) => (number1) => OPERATIONS[OPERATION_SIGNS.PLUS](number1, number);

// const minus = (number) => (number1) => OPERATIONS[OPERATION_SIGNS.MINUS](number1, number);

// const times = (number) => (number1) => OPERATIONS[OPERATION_SIGNS.TIMES](number1, number);

// const dividedBy = (number) => (number1) => OPERATIONS[OPERATION_SIGNS.DIVIDE](number1, number);

// let x = 10;
// let y = 20;

// [x, y] = [y, x]
// console.log(x,y)

// let value = 20;

// if (true) {
//   // console.log(value);
//   let value = 10;
//   console.log(value);
// }

// const value;
//  value = 'bunny'

// const max = 10;
// let amount = 0;

// while (amount++ < max) {
//     let sum;
//     sum += amount;
// }

// console.log(sum)

// const person = {
//     f: 'j',
//     sh() {
//         console.log(this.f);
//     },
// }

// const foo = function (callback) {
//     callback()
// }

// foo(person.sh)

// const add = (a = 0, b = 10) => a + b;
// const result = add(10);
// console.log(result)
