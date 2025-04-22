/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
  const visited = new Set();

  let current = head;

  while (current) {
    if (visited.has(current)) {
      return current; 
    }
    visited.add(current);
    current = current.next;
  }

  return null; 
};