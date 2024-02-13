/* The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned.
 Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here. */

rgb(155, -17, -11)

function rgb(r, g, b) {
    
   let arr = []
   let result = [];
   const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
   arr.push(r,g,b)
for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 255) { arr[i] = 255}
    else if (arr[i] < 0) {arr[i] = 0}
}

   arr.map(function (x) {
    let  temp1 = Math.floor(x / 16)
    let temp2 = x - temp1 * 16;
    result.push(hex[temp1])
    result.push(hex[temp2])
   })

   return result.join('') 
}