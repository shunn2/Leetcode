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
var addTwoNumbers = function(l1, l2) {
    const head = new ListNode();
	let list = head;
	let tmp = 0;
	let d1 = l1;
	let d2 = l2;

	const countSum = (sum) => {
		sum += tmp;
		list.next = new ListNode(sum >= 10 ? sum - 10 : sum);
		tmp = sum >= 10 ? 1 : 0;
		list = list.next;
	};

	while (d1 && d2) {
		countSum(d1.val + d2.val);
		d1 = d1.next;
		d2 = d2.next;
	}

	let last = d1 || d2;
	while (last) {
		countSum(last.val);
		last = last.next;
	}

	if (tmp) {
		list.next = new ListNode(1);
	}

	return head.next;
};