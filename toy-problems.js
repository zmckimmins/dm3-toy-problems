/*
--------------
Next Problem (Day 1)
--------------
*/

/*
 Write a function that takes in an array of numbers and determines whether those numbers are in order
 */


function ordered( arr ) {
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] > arr[i + 1]) {
            return false;
        }
    }
    return true;
}

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
function ordered ( array ) {
    for (var i = 0; i < array.length-1; i++)
        if (array[i] < array[i+1]) {
            console.log("True")
        } else {
            console.log("false")
        }
}

ordered ( [1, 2, 3, 7, 12] );
ordered ( [4, 9, 42, 22, 56] );


/*
--------------
Next Problem (Day 2)
--------------
*/

/*
An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram.
Assume the empty string is an isogram. Ignore letter case.
*/

//my solution

function isIsogram(str){
  // Turn all letters of the string to lower case and split it into an array.
  var letters = str.toLowerCase().split('');
  var checkLetters = [];

   /* Check to see if the letter appears in the checkLetters array.
    If the letter is not already in the array it will push the letter into it. */
  letters.forEach(function(letter) {
   if(checkLetters.indexOf(letter) === -1) {
     checkLetters.push(letter);
//      console.log(checkLetters);
   }
 });
  /* Now we have two arrays. If the letters array has non-duplicate letters then
    it will be the same length as the checkLetters array. If not, the checkLetters array
    will be shorter. */

 /* Return true or false depending on whether the lengths of both arrays are equal */

 return letters.length === checkLetters.length ? true : false;
}

console.log(isIsogram("Dermatoglyphics")); //true
console.log(isIsogram("aba")); // false
console.log(isIsogram("moOse")); // false // ignore letter case
console.log(isIsogram("you didnt even know"));
console.log(isIsogram("yes im down"));
