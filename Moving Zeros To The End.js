/* Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements. 
moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]
*/

moveZeros([1,2,0,1,0,1,0,3,0,1,"a","b","c", false, null])

function moveZeros(arr) {
    let arr1 = [];
    arr.map(function (x) {if (x === 0) {arr1.push(x)}})
    let moreZero = arr.filter(n => n !== 0);
    return moreZero.concat(arr1);
  }