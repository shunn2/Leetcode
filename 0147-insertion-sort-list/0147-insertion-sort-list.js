/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var insertionSortList = function(head) {
    const dummy = { val: -Infinity, next: null };
    let curr = head;

    while (curr) {
        let prev = dummy;

        while (prev.next && prev.next.val < curr.val) {
            prev = prev.next;
        }

        const nextTemp = curr.next;
        curr.next = prev.next;
        prev.next = curr;

        curr = nextTemp;
    }

    return dummy.next;
};