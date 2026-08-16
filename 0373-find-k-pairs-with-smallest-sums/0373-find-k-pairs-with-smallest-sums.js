/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @param {number} k
 * @return {number[][]}
 */
var kSmallestPairs = function(nums1, nums2, k) {
    const n1 = nums1.length;
    const n2 = nums2.length;
    const res = [];

    if (n1 === 0 || n2 === 0 || k === 0) return res;

    const minHeap = new MinPriorityQueue(a => a.sum);

    for (let i = 0; i < Math.min(n1, k); i++) {
        minHeap.enqueue({
            sum: nums1[i] + nums2[0],
            i: i,
            j: 0
        });
    }

    while (k > 0 && !minHeap.isEmpty()) {
        const { sum, i, j } = minHeap.dequeue();
        res.push([nums1[i], nums2[j]]);
        k--;

        if (j + 1 < n2) {
            minHeap.enqueue({
                sum: nums1[i] + nums2[j + 1],
                i: i,
                j: j + 1
            });
        }
    }

    return res;
};