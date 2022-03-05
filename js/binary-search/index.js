let recursiveFunction = function (arr, x, start, end) {
  // Base Condition
  if (start > end) return false

  // Find the middle index
  let mid = Math.floor((start + end) / 2)

  // Compare mid with given key x
  if (arr[mid] === x) return true

  // If element at mid is greater than x,
  // search in the left half of mid
  if (arr[mid] > x) return recursiveFunction(arr, x, start, mid - 1)
  // If element at mid is smaller than x,
  // search in the right half of mid
  else return recursiveFunction(arr, x, mid + 1, end)
}

function binarySearch(arr, val) {
  let start = 0
  let end = arr.length - 1

  while (start <= end) {
    let mid = Math.floor((start + end) / 2)

    if (arr[mid] === val) {
      return mid
    }

    if (val < arr[mid]) {
      end = mid - 1
    } else {
      start = mid + 1
    }
  }
  return -1
}
