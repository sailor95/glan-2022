/**
 * @param {string} s
 * @return {string}
 */
const longestPalindrome = s => {
  // Case 1. Odd Palindrome -> aba
  // Case 2. Even Palindrome -> bb
}

// https://leetcode.com/problems/longest-palindromic-substring/discuss/1778525/JAVASCRIPT-Expand-around-center-O(n2)-time-O(1)-space
const longestPalindrome1 = function (s) {
  let max = ''

  //Iterate through s
  for (let i = 0; i < s.length; i++) {
    // there's 2 ways to expand the center point, odd palindrome or even palindrome
    for (let j of [i, i + 1]) {
      let [left, right] = [i, j]
      //while the current selection is a palindrome, keep expanding
      while (s[left] && s[left] === s[right]) {
        left--
        right++
      }
      // 由於 left & right 會多 + & - 一次，底下的運算扣除這個
      //if the actual length of the curr word is greater than the prev max palindrome replace value of max
      if (right - left - 1 > max.length) max = s.substring(left + 1, right)
    }
  }

  return max
}

// https://leetcode.com/problems/longest-palindromic-substring/discuss/1667383/Clean-solution-with-helper-function
function longestPalindrome2(s) {
  let resultStart = 0,
    resultLength = 0

  function expandRange(str, begin, end) {
    while (begin >= 0 && end < str.length && str[begin] == str[end]) {
      begin--
      end++
    }
    if (resultLength < end - begin - 1) {
      resultStart = begin + 1
      resultLength = end - begin - 1
    }
  }

  if (s.length < 2) return s
  for (let start = 0; start < s.length - 1; start++) {
    expandRange(s, start, start)
    expandRange(s, start, start + 1)
  }
  return s.slice(resultStart, resultStart + resultLength)
}
