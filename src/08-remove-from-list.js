/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined with this interface
 * function ListNode(x) {
 *   this.value = x;
 *   this.next = null;
 * }
 */

function removeKFromList(l, k) {
  let list = l;
  if (l.next === null) {
    return null;
  }
  while (list) {
    if (list.next != null && list.value === k) {
      list.value = list.next.value;
      list.next = list.next.next;
    } else if (list.next != null && list.next.value === k) {
      list.next = list.next.next;
    } else {
      list = list.next;
    }
  }
  return l;
}

module.exports = removeKFromList;
