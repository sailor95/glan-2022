/**
 * @param {number} x
 * @return {number}
 */
const reverse = x => {
  const max = Math.pow(2, 31) - 1
  const min = -Math.pow(2, 31)

  const reversed = x.toString().split('').reverse().join('') * Math.sign(x)
  return reversed < max && reverse > min ? reversed : 0
}

// How to get min & max in JS ES6^
const max = Number.MAX_SAFE_INTEGER
const min = Number.MIN_SAFE_INTEGER

console.log(max)
console.log(min)
/**
 * Refs:
 * - https://stackoverflow.com/questions/307179/what-is-javascripts-highest-integer-value-that-a-number-can-go-to-without-losin
 */
