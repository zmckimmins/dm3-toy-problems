/*
--------------
Next Problem (Wk2-Day 1)
--------------
*/

/*
 Write a function that takes in an array of numbers and determines whether those numbers are in order
 */


// function ordered( arr ) {
//     for (var i = 0; i < arr.length; i++) {
//         if (arr[i] > arr[i + 1]) {
//             return false;
//         }
//     }
//     return true;
// }

//Nic
// function inOrder (array) {
//     var order = [];
//     for (var i = 0; i < array.length; i++){
//         if (array[i] < array[i+1]) {
//             order.push(array[i]);
//         }
//     }
//     if (array[array.length - 1] > array[array.length - 2]){
//         order.push(array[array.length - 1]);
//     }
//     if (order.length === array.length){
//     return true;
//     } else {
//     return false;
//     }
// }

// console.log(inOrder( [1, 2, 3, 7, 12] )); // true
// console.log(inOrder( [4, 9, 42, 22, 56] )); // false

//Shakib
// function isOrdered (array){
//  for(var i=0; i<array.length; i++){
//   if(array[i+1] < array[i]){
//      return false;
//   }
//  }
//  return true;
// }

// console.log(isOrdered( [1, 2, 3, 7, 12] )); // true
// console.log(isOrdered( [4, 9, 42, 22, 56] )); // false

//Dominic
// function ordered ( array ) {
//     for (var i = 0; i < array.length-1; i++)
//         if (array[i] < array[i+1]) {
//             console.log("True");
//         } else {
//             console.log("false");
//         }
// }
//
// ordered ( [1, 2, 3, 7, 12] );
// ordered ( [4, 9, 42, 22, 56] );


/*
--------------
Next Problem (Wk2-Day 2)
--------------
*/

/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram.
Assume the empty string is an isogram. Ignore letter case.
*/

//my solution

// function isIsogram(str){
//   // Turn all letters of the string to lower case and split it into an array.
//   var letters = str.toLowerCase().split('');
//   var checkLetters = [];
//
//    /* Check to see if the letter appears in the checkLetters array.
//     If the letter is not already in the array it will push the letter into it. */
//   letters.forEach(function(letter) {
//    if(checkLetters.indexOf(letter) === -1) {
//      checkLetters.push(letter);
// //      console.log(checkLetters);
//    }
//  });
  /* Now we have two arrays. If the letters array has non-duplicate letters then
    it will be the same length as the checkLetters array. If not, the checkLetters array
    will be shorter. */

 /* Return true or false depending on whether the lengths of both arrays are equal */

//  return letters.length === checkLetters.length ? true : false;
// }

// console.log(isIsogram("Dermatoglyphics")); //true
// console.log(isIsogram("aba")); // false
// console.log(isIsogram("moOse")); // false // ignore letter case
// console.log(isIsogram("you didnt even know"));
// console.log(isIsogram("yes im down"));

//Nic's solution
// function isIsogram(str){
//     var cap = str.toUpperCase().split("");
//     var check = [];
//     cap.forEach(function(val){
//         if(check.indexOf(val) === -1){
//             check.push(val);
//         }
//     });
//      if (check.length === cap.length){
//          return true;
//      }
//
//     return false;
// }

//Dominic's solution
// var isogram = function( string ) {
//     string = string.toLowerCase();
//     var array = string.split('');
//     var checked = [];
//
//     for ( var i = 0; i < array.length; i++ ) {
//         if ( checked.indexOf(array[i] ) < 0 ) {
//             checked.push( array[i] );
//         } else {
//             return false;
//         }
//     }
//     return true;
// };

//Tony's solution
// var isogram = function(str){
//  str.toLowerCase();
//  var arr = str.split("");
//  var looped = [];
//
//  for (var i = 0; i < arr.length; i++){
//    if (looped.indexOf(arr[i]) < 0){
//      looped.push(arr[i]);
//    }
//    else{
//      return false;
//    }
//      return true;
//  }
// };

 /*
 --------------
 Next Problem (Wk2-Day 3)
 --------------
 */

 /*
we want you to extend the built-in Array class with the following methods: square(), cube(), average(), sum(), even() and odd().
Explanation:
    square() must return a copy of the array, containing all values squared, the original array must not be changed
    cube() must return a copy of the array, containing all values cubed, the original array must not be changed
    average() must return the average of all array values, average() on an empty array must return NaN
    sum() must return the sum of all array values
    even() must return an array of all even numbers, the original array must not be changed
    odd() must return an array of all odd numbers, the original array must not be changed
var numbers = [1, 2, 3, 4, 5];
numbers.square(); // must return [1, 4, 9, 16, 25]
numbers.cube(); // must return [1, 8, 27, 64, 125]
numbers.average(); // must return 3
numbers.sum(); // must return 15
numbers.even(); // must return [2, 4]
numbers.odd(); // must return [1, 3, 5]
*/

// Array.prototype.square = function() {
//     return this.map(function(item) {
//         return Math.pow(item, 2);
//     });
// };

// Array.prototype.cube = function() {
//     return this.map(function(item) {
//         return Math.pow(item, 3);
//     });
// };

// Array.prototype.sum = function() {
//     return this.reduce(function(pv, cur) {
//         return pv + cur;
//     });
// };
//
// Array.prototype.average = function() {
//     if (this.length === 0) return NaN;
//
//     return this.sum() / this.length;
// };
//
// Array.prototype.even = function() {
//     return this.filter(function(item) {
//         return item % 2 === 0;
//     });
// };
//
// Array.prototype.odd = function() {
//     return this.filter(function(item) {
//         return item % 2 !== 0;
//     });
// };

//Nic's solution
// var numbers = [1, 2, 3, 4, 5];
//
// Array.prototype.square = function() {
//     var answer = [];
//     for (var i = 0; i < this.length; i++) {
//         answer.push(this[i] * this[i]);
//     }
//     return answer;
// };
// Array.prototype.cube = function() {
//     var answer = [];
//     for (var i = 0; i < this.length; i++) {
//         answer.push(this[i] * this[i] * this[i]);
//     }
//     return answer;
// };
// Array.prototype.average = function() {
//     var answer = 0;
//     for (var i = 0; i < this.length; i++) {
//         answer = answer + this[i];
//     }
//     return (answer / this.length);
// };
// Array.prototype.sum = function() {
//     var answer = 0;
//     for (var i = 0; i < this.length; i++) {
//         answer = answer + this[i];
//     }
//     return answer;
// };
// Array.prototype.even = function() {
//     var answer = [];
//     for (var i = 0; i < this.length; i++) {
//         if (this[i] % 2 === 0) {
//             answer.push(this[i]);
//         }
//     }
//     return answer;
// };
//
// Array.prototype.odd = function() {
//     var answer = [];
//     for (var i = 0; i < this.length; i++) {
//         if (this[i] % 2 !== 0) {
//             answer.push(this[i]);
//         }
//     }
//     return answer;
// };

//Dominic's solution
// var numbers = [1, 2, 3, 4, 5];
//
// Array.prototype.square = function() {
//     return this.map(function(n) {
//         return Math.pow(n, 2);
//     });
// };
//
// Array.prototype.cube = function() {
//     return this.map(function(n) {
//         return Math.pow(n, 3);
//     });
// };
//
// Array.prototype.sum = function () {
//     return this.reduce(function(a, b) {
//         return a + b;
//     }, 0);
// };
//
// Array.prototype.average = function() {
//     return this.sum() / this.length;
// };
//
// Array.prototype.even = function () {
//     return this.filter(function(item) {
//         return 0 === item % 2;
//     });
// };
//
// Array.prototype.odd = function () {
//     return this.filter(function(item) {
//         return 0 !== item % 2;
//     });
// };

// numbers.square();
// numbers.cube();
// numbers.sum();
// numbers.average();
// numbers.even();
// numbers.odd();



 /*
 --------------
 Next Problem (Wk2-Day 4)
 --------------
 */

/*
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters, - each taken only once - coming from s1 or s2.
a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"
a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"
*/

// a = "xyaabbbccccdefww";
// b = "xxxxyyyyabklmopq";
// c = "abcdefghijklmnopqrstuvwxyz";

// function longest(s1, s2) {
// 	var str1  = s1.split('');
// 	var str2 = s2.split('');
// 	var newArray = [];
// 	for(var i = 0; i < str1.length; i++){
// 		if(!newArray.includes(str1[i])){
// 			newArray.push(str1[i])
// 		}
// 	}
// 	for(var j = 0; j < str2.length; j++){
// 		if(!newArray.includes(str2[j])){
// 			newArray.push(str2[j])
// 		}
// 	}
// 	return newArray.sort().join('');
// }


// function longest(s1, s2) {
//   s3 = (s1 + s2).split("").sort().filter(function(element, index, array){
//     return element !== array[index - 1];
//   });
//   return s3.join("");
// }

// function longest( s1, s2 ) {
//     return ( s1 + s2 ).split( '' ).sort().filter( function( ele, index, arr ) {
//         return ele !== arr[ index - 1 ];
//     }).join( '' );
// }

//Nic's
// function longest(str1, str2){
//     var arr1 = str1.split("");
//     var arr2 = str2.split("");
//     function unique(arr){
//         var noDups = [];
//         for (var i = 0; i < arr.length; i++){
//             if (noDups.indexOf(arr[i]) === -1){
//                 noDups.push(arr[i]);
//             }
//         }
//         return noDups;
//     }
//     var answer = unique(arr1);
//     var noDupsArr2 = unique(arr2);
//     for (var i = 0; i < noDupsArr2.length; i++){
//         if (answer.indexOf(noDupsArr2[i]) === -1){
//             answer.push(noDupsArr2[i]);
//         }
//     }
//     answer = answer.sort().join("");
//     return answer;
// }

//Shakib's
// var longest = function (str1, str2){
//  var combined = str1.split("").concat(str2.split(""));
//  var noDublicates = [];
//  for(var i=0; i<combined.length; i++){
//   if(noDublicates.indexOf(combined[i]) === -1){
//      noDublicates.push(combined[i]);
//   }
//  }
//  var allSorted = noDublicates.sort().join('');
//  return allSorted;
// };

// console.log(longest(a, b)); // abcdefklmopqwxy
// console.log(longest(b, c)); // abcdefghijklmnopqrstuvwxyz

/*
--------------
Next Problem (Wk3-Day 1)
--------------
*/

// function triangle() {
//     var txt = '#######'
//     for (var i = txt.length; i >= 0; i--){
//       console.log(txt.slice(i))
//     }
// }

// triangle();

// function triangle(num) {
//   var str = '';
//   for (var i = num; i >= 1; i--) {
//     str += '#';
//     console.log(str);
//   }
// }
//
// triangle(10);

//Shakib's
// function triangle(){
//  for(var i=1; i<=7; i++){
//   var numberOfHash = i;
//   var currLine = "";
//   while(numberOfHash !== 0){
//      currLine = currLine + "#";
//      numberOfHash = numberOfHash - 1;
//   }
//   console.log(currLine);
//  }
// }

//Nic's
// function triangle(){
//   var symbol = "######";
//   for(var i = 1; i < 7; i++)
//     console.log(symbol.slice(0, [i]));
// }

// triangle();

// Dominic's
// function makeTriangle() {
//     var triangle = '';
//     for (var i = 0; i < 7; i++) {
//         triangle = triangle + '#';
//         console.log(triangle);
//     }
// }

// makeTriangle();

/*
--------------
Next Problem (Wk3-Day 2)
--------------
*/

/*
Write a generic function chainer
Write a generic function chainer that takes a starting value, and an array of functions to execute on it.
The input for each function is the output of the previous function (except the first function, which takes the starting value as it's input). Return the final value after execution is complete.
*/
// function add(num) {
//   return num + 1;
// }
// function mult(num) {
//   return num * 30;
// }
// chain(2, [add, mult]);
// returns 90;

// Mentors solution
// function chain(x, fns) {
//   return fns.reduce(function(x, fn) {
//     return fn(x)
//   }, x)
// }

//Shakib's
// function chain(start, arrOfFunc){
//  var curr = arrOfFunc[0](start);
//  for(var i=1; i<arrOfFunc.length; i++){
//     curr = arrOfFunc[i](curr);
//  }
//  return curr;
// }

// Nic's
// function chain(initialValue, array){
//   num = initialValue;
//   for(var i = 0; i < array.length; i++ ){
//     num = array[i](num);
//   }
//   return num;
// }

// Dominic's
// function chain( val, funcs ) {
//     for (var i = 0; i < funcs.length; i++) {
//         val = funcs[i](val);
//     }
//     return val;
// }
//
// chain(2, [add, mult]); // 90

/*
--------------
Next Problem (Wk3-Day 3)
--------------
*/

/*
Write a function called validParentheses that takes a string of parentheses, and determines if the order of the parentheses is valid. validParentheses should return true if the string is valid, and false if it's invalid.
Examples:
validParentheses( "()" ) => returns true
validParentheses( ")(()))" ) => returns false
validParentheses( "(" ) => returns false
validParentheses( "(())((()())())" ) => returns true
*/

// Mentor's
// function validParentheses(parens){
//   var n = 0;
//   for (var i = 0; i < parens.length; i++) {
//     if (parens[i] == '(') n++;
//     if (parens[i] == ')') n--;
//     if (n < 0) return false;
//   }
//
//   return n === 0;
// }

// function validParentheses(parens) {
// return ((parens.forEach() === "(") ? " true " : " false ");
// }

// Shakib's
// var validParentheses = function(parenStr){
//  var count = 0;
//  for (var i=0; i<parenStr.length; i++){
//   if(parenStr.charAt(i) === "("){
//      count = count + 1;
//   }else if(parenStr.charAt(i) === ")"){
//      count = count - 1;
//   }
//  }
//  if(count !== 0){
//   return false;
//  }return true;
// };

// Dominic's
// function validParentheses( str ) {
//     var i = 0;
//     var arr = [];

//     if ( !str.length ) {
//         return true;
//     }

//     if ( (str.length % 2) !== 0 ) {
//         return false;
//     }

//     while ( i < str.length ) {
//         if ( str[i] == "(" ) {
//             arr.push( str[i] );
//         } else if ( str[i] == ")" ) {
//             if ( arr.length ) {
//                 arr.pop();
//             } else {
//                 return false;
//             }
//         }
//         i++;
//     }
//     return true;
// }

// Nic's
// function validParentheses(str){
//     var check = [];
//     for(var i = 0; i < str.length; i++){
//         if(str[i] === "("){
//             check.push(i);
//         }else if (str[i] === ")"){
//             if (check.length){
//                 check.pop();
//             }else{
//                 return false;
//             }
//         }
//     }
//     if(check.length % 2 !== 0){
//       return false;
//     }
//     return true;
// }

// console.log(validParentheses( "()" )); // returns true
// console.log(validParentheses( ")(()))" )); // returns false
// console.log(validParentheses( "(" )); // returns false
// console.log(validParentheses( ")()(" )); // returns false
// console.log(validParentheses( "(())((()())())" )); // returns true

/*
--------------
Next Problem (Wk3-Day 4)
--------------
*/

/*
Write a function, which takes a non-negative integer (seconds) as input and returns the time in a human-readable format (HH:MM:SS)
    HH = hours, padded to 2 digits, range: 00 - 99
    MM = minutes, padded to 2 digits, range: 00 - 59
    SS = seconds, padded to 2 digits, range: 00 - 59
The maximum time never exceeds 359999 (99:59:59)
*/

// Mentors
// function humanReadable(seconds) {
//   var hours = parseInt( seconds / 3600 ) ;
//   var minutes = parseInt( seconds / 60 ) % 60;
//   var seconds = seconds % 60;
//
//   var pad = function(val){
//     return val < 10 ? "0" + val : val;
//   };
//
//   return pad(hours) + ":" +pad(minutes) + ":" + pad(seconds);
// }

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Conditional_Operator

// Nic's
// function humanReadable(sec){
//     var hours   = Math.floor(sec / 3600);
//     var minutes = Math.floor((sec - (hours * 3600)) / 60);
//     var seconds = sec - (hours * 3600) - (minutes * 60);

//     if (hours   < 10) {
//         hours   = "0"+hours;
//     }if (minutes < 10) {
//         minutes = "0"+minutes;
//     }if (seconds < 10) {
//         seconds = "0"+seconds;
//     }
//     return hours + ':' + minutes + ':' + seconds;
// }

// Cameron's
// function humanReadable(seconds) {
//  if (seconds > 359999) {
//   console.log('Too big!');
//  }
//  if (seconds <= 9) {
//   console.log('00:00:0' + seconds);
//  } else if (seconds <= 59) {
//   console.log('00:00:' + seconds);
//  } else if (seconds >= 60 && seconds <= 69) {
//   console.log('00:01:0' + (seconds - 60));
//  } else if (seconds >= 100 && seconds <= 109) {
//   console.log('00:01:' + (seconds- 60));
//  } else if (seconds >= 200 && seconds <= 209) {
//   console.log('00:02:' + (seconds- 160));
//  } else if (seconds >= 300 && seconds <= 309) {
//   console.log('00:03:' + (seconds- 260));
//  } else if (seconds >= 400 && seconds <= 409) {
//   console.log('00:04:' + (seconds- 360));
//  } else if (seconds >= 500 && seconds <= 509) {
//   console.log('00:05:' + (seconds- 460));
//  } else if (seconds >= 600 && seconds <= 609) {
//   console.log('00:06:' + (seconds- 560));
//  } else if (seconds >= 700 && seconds <= 709) {
//   console.log('00:07:' + (seconds- 660));
//  } else if (seconds >= 800 && seconds <= 809) {
//   console.log('00:08:' + (seconds- 760));
//  } else if (seconds >= 900 && seconds <= 909) {
//   console.log('00:09:' + (seconds- 860));
//  } else if (seconds >= 1000 && seconds <= 1010) {
//   console.log('00:10:' + (seconds- 960));
//  }


// }

// Shakib's
// var humanReadable = function (seconds){
//   var sec = 0;
//   var min = 0;
//   var hr = 0;

//   sec = seconds % 60;
//   min = parseInt((seconds / 60) % 60);
//   hr = parseInt( seconds / 3600 );

//   if(sec<10){
//     sec = "0"+sec;
//   }
//   if(min<10){
//     min = "0"+min;
//   }
//   if(hr<10){
//     hr = "0"+hr; // switch min to hr lol
//   }
//   console.log(hr + ":" + min + ":" + sec);
// };

// function humanReadable(sec){
//     var hours   = Math.floor(sec / 3600);
//     var minutes = Math.floor((sec - (hours * 3600)) / 60);
//     var seconds = sec - (hours * 3600) - (minutes * 60);

//     if (hours   < 10) {
//         hours   = "0"+hours;
//     }if (minutes < 10) {
//         minutes = "0"+minutes;
//     }if (seconds < 10) {
//         seconds = "0"+seconds;
//     }
//     return hours + ':' + minutes + ':' + seconds;
// }

// Dontavious
// function humanReadable(num) {
// 	var hours = num / 60;
// 	var rhours = Math.floor(hours);
// 	var minutes = (hours - rhours) * 60;
// 	var rminutes = Math.floor(minutes);
// 	var seconds = (minutes - rminutes) * 60;
// 	var rseconds = Math.floor(seconds);

// 	return rhours + ":" + rminutes + ":" + rseconds;
// }

// Rommel
//  var SS = 0;
//   var MM = 0;
//   var HH = 0;
// var time = function(seconds) {
//   do {
//     if (seconds >= 360) {
//       HH += 01;
//       seconds -= 360;
//     }
//   }
//   while (seconds >= 360);

//   do {
//     if (seconds >= 60) {
//       MM += 01;
//       seconds -= 60;
//     }
//   }
//   while (seconds >= 60);

//   if (seconds < 60) {
//     SS += seconds;
//   }
// };


// console.log(humanReadable(0)); // '00:00:00'
// console.log(humanReadable(5)); // '00:00:05'
// console.log(humanReadable(60)); // '00:01:00'
// console.log(humanReadable(86399)); // '23:59:59'
// console.log(humanReadable(359999)); // '99:59:59'

/*
--------------
Next Problem (Wk4-Day 1)
--------------
*/

/*Write a new nestedFilter method on the Array prototype, it should work the same as filter,
but work on all nested arrays within the initial array.*/

// Array.prototype.nestedFilter = function( cb ) {
//   let ret = [];
//   for ( let i = 0; i < this.length; i++ ) {
//     if ( Array.isArray(this[i]) ) {
//       ret.push(this[i].nestedFilter( cb ));
//     } else {
//       if ( cb( this[i], i, this ) ) {
//         ret.push(this[i]);
//       }
//     }
//   }
//   return ret;
// };

// console.log([false, true, [true, false, false], true].nestedFilter( item => item )); // returns [true, [true], true]
// console.log([2, 4, 8, 7, [9, 12, 13, 99, [87, 64, 3022]]].nestedFilter( item => item % 2 === 0)); // returns [2, 4, 8, [12, [64, 3022]]]

/*
--------------
Next Problem (Wk4-Day 2)
--------------
*/

/*
No trailing spaces!
'anane' === 1
'adak' === 2

console.log(amazonCounting(1)); // 'anane'
console.log(amazonCounting(2)); // 'adak'
console.log(amazonCounting(13)); // 'adak adak adak adak adak adak anane'
*/



// Mentos 1
// function amazonCounting(num) {
//     var anane = "anane";
//     var adak = 'adak';

//     if ( num === 1 ) {
//         return anane;
//     } else if ( num === 2 ) {
//         return adak;
//     } else {
//         return adak + " " + amazonCounting( num - 2 );
//     }
// }

// Mentos 2
// function amazonCounting( num ) {
//     switch ( num ) {
//         case 0:
//             return '';
//         case 1:
//             return 'anane';
//         case 2:
//             return 'adak';
//         default:
//             return 'adak ' + amazonCounting( num - 2 );
//     }
// }

// Camerons
// function amazonCounting(num) {
//   var str = "";

//   if (num % 2 === 0) {
//     for(var i = 0; i < num / 2; i++) {
//       str += 'adak';
//     }
//   } else {
//     for (var i = 0; i < (num - 1) / 2; i++) {
//       str += 'adak' + ' ';
//     }
//     str += 'anane';
//   }
//   //console.log(str);
//   return str;
// }

// Dominic's
// function amazonCounting(numero) {
//     var uno = "anane";
//     var dos = 'adak';

//     if ( numero === 1 ) {
//         return uno;
//     } else if ( numero === 2 ) {
//         return dos;
//     } else {
//         return dos + " " + amazonCounting( numero - 2 );
//     }
// }

// console.log(amazonCounting(1)); // 'anane'
// console.log(amazonCounting(2)); // 'adak'
// console.log(amazonCounting(13)); // 'adak adak adak adak adak adak anane'

/*
--------------
Next Problem (Wk4-Day 3)
--------------
*/

/*
write a function that will console log the numbers 1 through 5,
with delays between each log equaling the logged number.
delayLog() // pauses 1 second, then logs 1
// pauses 2 seconds after the previous log, then logs 2
// pauses 3 seconds after the previous log, then logs 3
// pauses 4 seconds after the previous log, then logs 4
// pauses 5 seconds after the previous log, then logs 5
*/

// function delayLog() {
//     var counter = 1;

//     function logger() {
//         if ( counter <= 5 ) {
//             setTimeout( function() {
//                 console.log( counter++ );
//                 logger();
//             }, counter * 1000);
//         }
//     }
//     logger();
// }

// function delayLog(num) {

//  var timer = 1000;
//  var num2 = 2;

//  if (!num) {
//   num = 1;
//  }

// Camerons
//  for (var i = 0; i < 5; i++) {
//   setTimeout(function() {
//   console.log(num);
//   num++;
//  }, timer);
//      console.log(timer);
//   timer += 1000 * num2;
//   num2++;
//  }
// }

// Nic's
// function delayLog(){
//   function count(time){
//     var num = time;
//     setTimeout(function(){
//       if(num < 6){
//         console.log(num);
//         num = num + 1;
//         count(num);
//       }
//     }, (num * 1000));
//   }
//   count(1);
// }

// Dontavious
// function delayLog(arr) {
//   for (var i = 1; i < arr.length - 1; i++) {
//     setInterval(arr[i], i * 1000);
//   }
// }


// console.log(delayLog([1,2,3,4,5]));

// Dominic's
// for ( i = 1; i <= 5; i++ ) {
//   delayLog(i);
// }

// function delayLog(i) {
//   setTimeout( function() {
//     console.log( i );
//   }, i * 1000) ;
// }

// Shakib's
// function delayLog(){
//  for (var i = 1; i <= 5; i++){
//      setTimeout(function() {
//       console.log(i);
//      }, i*1000);
//  }
// }

// Rommel
// var nums = [1, 2, 3, 4, 5];
// var log = function() {
//     for(var i = 0; i < nums.length; i++) {
//     console.log(nums[i]);
//     }

// };
// setInterval(log, (nums*1000));

// delayLog();

/*
--------------
Next Problem (Wk4-Day 4)
--------------
*/

/*
Write a function format that takes two arguments, text and width, and formats the text to fit the width.
Your function should divide the given text into lines using newline characters. It should fit as many words into each line as possible without exceeding the given width or splitting any words between two lines. There should not be a space at the beginning or end of any line. For example, here is some text formatted with a width of 50:
*/
var str = "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec consectetur risus. Cras vel urna a tellus dapibus consequat. Duis bibendum tincidunt viverra. Phasellus dictum efficitur sem quis porttitor. Mauris luctus auctor diam id ultrices. Praesent laoreet in enim ut placerat. Praesent a facilisis turpis. And the same text formatted with a width of 30: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec consectetur risus. Cras vel urna a tellus dapibus consequat. Duis bibendum tincidunt viverra. Phasellus dictum efficitur sem quis porttitor. Mauris luctus auctor diam id ultrices. Praesent laoreet in enim ut placerat. Praesent a facilisis turpis."

// function format(text, width) {
//   var textArr = text.split(' ');
//   var currentLineLength = 0;
//   var formatted = [[]];
//   var formattedIndex = 0;

//   for ( var i = 0; i < textArr.length; i++ ) {
//     if ( (textArr[i].length + currentLineLength) > width ) {
//       formatted[formattedIndex] = formatted[formattedIndex].join(' ');
//       //console.log(formatted[formattedIndex])
//       formatted.push([]);
//       //console.log(formatted);
//       formattedIndex++;
//       currentLineLength = 0;
//     }
//     formatted[formattedIndex].push(textArr[i]);
//     currentLineLength += textArr[i].length + 1;
//     // console.log(currentLineLength)
//     // console.log(formatted[formattedIndex])
//   }

//   if ( Array.isArray(formatted[formattedIndex]) ) {
//     formatted[formattedIndex] = formatted[formattedIndex].join(' ');
//     console.log(formatted[formattedIndex])
//   }
//   return formatted.join("\n");
// }

// Nic's
// function format(text, width){
//   var arr = text.split("");
//   function checkBack(x){
//     for(var j = x; x > 0; x-- ){
//       if (arr[x] === " "){
//         arr.splice(x, 0, "\n");
//         i = x + 2;
//         return;
//       }
//     }
//   }
//   for(var i = width; i < arr.length; i = i + width){
//     if (arr[i] !== " "){
//       checkBack(i);
//     } else {
//       arr.splice(i, 0, "\n");
//       i = i + 2;
//   }
//   }
//   return arr.join("");
// }

// Dontavious
// function format(str, width, spaceReplacer) {
//     if (str.length > width) {
//         var i = width;
//         for (i > 0; str[i] !== ' '; i--) {
//         }
//         if (i > 0) {
//             var left = str.substring(0, i);
//             var right = str.substring(i + 1);
//             return left + spaceReplacer + format(right, width, spaceReplacer);
//         }
//     }
//     return str;
// }

// console.log(format(str, 50, '\n'));

// Shakib's
// function format (text, width){
//  var count = 0;
//  var formatted = "";
//  var newLine = "";

//  var i=0;
//  while(i < text.length){
//   while(count <= width){
//      newLine = newLine + text.charAt(i);
//      count = count + 1;
//      i++;
//   }
//   formatted = formatted + newLine + '\n';
//   newLine = "";
//   count = 0;
//  }

//  return formatted;
// }

// Dominic's
// function format(text, width) {
//   var result = '';
//   var spaces = ' ';
//   while (text.length > 0) {
//     result += text.substring(0, width) + "\n";
//     text = text.substring(width);
//   }
//   return result;
// }
//
// console.log(format(str, 50));

/*
--------------
Next Problem (Wk5-Day 1)
--------------
*/
/*
As a crude form of hashing function, Lars wants to sum the digits of a number.
Then he wants to sum the digits of the result, and repeat until he have only one digit left.
*/

// function digitSum( num ) {
//   let sum = num.toString().split('').reduce( ( a, b ) => parseInt( a ) + parseInt( b ));
//
//   return sum < 10 ? sum : digitSum( sum );
// }
//
// // better
// function digitSum( n ) {
//     return n < 10 ? n : digitSum(Math.floor(n / 10) + (n % 10));
// }
//
// // Shakib's
// function digitSum(num){
//   var numToString = "" + num;
//   if(numToString.length === 1){
//     return parseInt(numToString);
//   }
//   var total = 0;
//   for(var i=0; i<numToString.length; i++){
//     total = total + parseInt(numToString.charAt(i));
//   }
//   return digitSum(total);
// }

// Dontavious
// function digitSum(num) {
//   var arrNum = [];
//   var sum = 0;
//   arrNum.push(num);
//   var farrNum = arrNum.join('').split();

//   for (var i = 0; i < farrNum.length; i++) {
//     sum += farrNum[i];
//     console.log(sum);
//   }
// }

// Nic's
// function digitSum( num ){
//     var answer = 0;
//     for(var i = 0; i < num.length; i++){
//         answer = answer + num[0];
//     }
//     if( answer.length !== 1){
//         digitSum(answer);
//     } else {
//         return answer;
//     }
// }
//
// console.log(digitSum( 31337 )); // 8
// console.log(digitSum( 1073741824 )); // 1

/*
--------------
Next Problem (Wk5-Day 2)
--------------
*/

//Create a function which answers the question "Are you playing Banjo?". If your name starts with the letter "R" or lower case "r", you are playing Banjo!

// The function takes a name as its only argument, and returns one of the following strings:

// name + "plays banjo" name + "does not play banjo"

// Names given are always valid strings.

// function areYouPlayingBanjo(name) {

//   var str = name.toLowerCase().split("")

//   if(str[0] === "r"){
//   	return name + " plays banjo";
//   } else {
//   	return name + " does not play banjo";
//   }
// }


/*-------------------
Using ternary
-------------------*/
// function areYouPlayingBanjo(name) {
// return name + ((name[0].toLowerCase() === "r") ? " plays " : " does not play ") + "bango";
// }

// Nic's
// function areYouPlayingBanjo( name ){
//     check = name.split("");
//     var ans = check[0] === ("R" || "r") ? name + " plays banjo" : name + " does not play banjo";
//     return ans;
// }


// Dominic
// function areYouPlayingBanjo(name) {
//     if(name.indexOf('r') === 0) {
//         console.log(name + " plays banjo");
//     } else if(name.indexOf('R') === 0) {
//         console.log(name + " plays banjo");
//     } else {
//         console.log(name + " does not play banjo");
//     }
// }

// Shakib
// function areYouPlayingBanjo(name) {
//   var newName = name;
//   return ((newName.toLowerCase().charAt(0) === 'r') ?
//          (name + " plays banjo") : (name + " does not play banjo"));
// }

// Dontavious
// function areYouPlayingBanjo(name) {
//   if (name.charAt(0) === 'R' || name.charAt(0) === 'r') {
//     return name + ' plays banjo.';
//   } else {
//     return name + ' does not play banjo.';
// }
// }

// console.log(areYouPlayingBanjo("Rolo"));
// console.log(areYouPlayingBanjo("Jolo"));

/*
--------------
Next Problem (Wk5-Day 3)
--------------
*/

/*
For this exercise you will create a flatten function.
The function takes in any number of arguments and flattens them
into a single array. If any of the arguments passed in are an
array then the individual objects within the array will be flattened
so that they exist at the same level as the other arguments.
Any nested arrays, no matter how deep, should be flattened into the
single array result.
The following are examples of how this function would be used and
what the expected results would be:
*/

// Naz
// let fill = [];
// let flatten = (...rest) => {
//   return rest.forEach(function(element, index, rest){
//       if(Array.isArray(element)){
//           return flatten(element);
//       }else{
//           fill.push(element);
//       }
//   })
// }

// Nic's
// function flatten(arr){
//     let ans = [];
//     for(let i = 0; i < arr.length; i++){
//         arr[i] instanceof Array?flatten(arr[i]):ans.push(arr[i]);
//     }
//     return ans;
// }

// Dominic's
// const flatten = (fuck) => {return [].concat(...fuck)};

// Mento

function flatten( ...args ) {
  let returnArray = [];
  for ( let i = 0; i < args.length; i++ ) {
    if (Array.isArray(args[i])) {
      returnArray.push(...flatten(...args[i]));
      console.log('if:', returnArray);
    } else {
      returnArray.push(args[i]);
      console.log('else:', returnArray);
    }
  }
  console.log('return:', returnArray);
  return returnArray;
}

console.log(flatten(1, [2, 3], 4, 5, [6, [7]])); // returns [1, 2, 3, 4, 5, 6, 7]
// console.log(flatten('a', ['b', 2], 3, null, [[4], ['c']])); // returns ['a', 'b', 2, 3, null, 4, 'c']

/*
--------------
Next Problem (Wk5-Day 4)
--------------
*/

/*
--------------
Next Problem (Wk6-Day 1)
--------------
*/

/*
--------------
Next Problem (Wk6-Day 2)
--------------
*/

/*
--------------
Next Problem (Wk6-Day 3)
--------------
*/

/*
--------------
Next Problem (Wk6-Day 4)
--------------
*/
