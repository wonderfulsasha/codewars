
/* Write a program that will calculate the number of trailing zeros in a factorial of a given number.

N! = 1 * 2 * 3 *  ... * N

zeros(6) = 1
# 6! = 1 * 2 * 3 * 4 * 5 * 6 = 720 --> 1 trailing zero

Be careful 1000! has 2568 digits... */

zeros(30)

function zeros (n) {
    if (n == 0) {
        return 0;
    }
let power = 1;
  let result = 0;
  while (n >= Math.pow(5, power)) {
    result += Math.floor(n / Math.pow(5, power));
    power++;
  }
  return result;
};
