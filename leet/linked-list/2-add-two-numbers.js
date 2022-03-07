/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */

const addTwoNumbers = (l1, l2) => {
  const result = new ListNode(0)
  let head = result

  let sum = 0
  let carry = 0

  while (l1 !== null || l2 !== null || sum > 0) {
    if (l1) {
      sum += l1.val
      l1 = l1.next
    }

    if (l2) {
      sum += l2.val
      l2 = l2.next
    }

    if (sum >= 10) {
      carry = 1
      sum = sum - 10
    }

    head.next = new ListNode(sum)
    head = head.next

    sum = carry
    carry = 0
  }

  return result.next
}

// Recursion
// https://leetcode.com/problems/add-two-numbers/discuss/399562/Javascript-Recursion!

const addTwoNumbersRecursive = (l1, l2) => {
  const add = (node1, node2, sum = 0) => {
    if (!(node1 || node2 || sum)) return null

    let carry = 0

    if (node1?.val) sum += node1.val
    if (node2?.val) sum += node2.val
    if (sum >= 10) {
      sum -= 10
      carry = 1
    }

    return new ListNode(sum, add(node1?.next, node2?.next, carry))
  }

  return add(l1, l2)
}
