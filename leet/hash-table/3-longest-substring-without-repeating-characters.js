var lengthOfLongestSubstring = function (s) {
  let l = 0
  let r = 0
  let max = 0
  const set = new Set()

  for (const idx in s) {
    r = idx

    if (!set.has(s[idx])) {
      // 1: There's no such item inset
      // 1.1: Add to set and push right
      set.add(s[idx])
    } else {
      // 2: There's such item in set
      // 2.1: Push left to duplicate position +1
      while (s[l] !== s[idx]) {
        set.delete(s[l])
        l++
      }

      l += 1
    }

    // 3: Calculate width from left to right and compare 'max'
    max = Math.max(max, r - l + 1)
  }

  return max
}

// Ref: https://leetcode.com/problems/longest-substring-without-repeating-characters/discuss/2291/9-line-JavaScript-solution
function lengthOfLongestSubstring2(s) {
  const map = {}
  var left = 0

  return s.split('').reduce((max, v, i) => {
    left = map[v] >= left ? map[v] + 1 : left
    map[v] = i
    return Math.max(max, i - left + 1)
  }, 0)
}
