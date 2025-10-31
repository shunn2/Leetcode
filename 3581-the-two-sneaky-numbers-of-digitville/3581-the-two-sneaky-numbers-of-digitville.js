/**
 * @param {number[]} nums
 * @return {number[]}
 */
var getSneakyNumbers = function(nums) {
    const n = nums.length - 2; // 원래 0..n-1이었는데 두 개가 한 번 더 등장
    let x = 0;

    // 1) 전체 XOR: 값들과 0..n-1을 모두 XOR
    for (const v of nums) x ^= v;
    for (let i = 0; i < n; i++) x ^= i;

    // 이제 x = a ^ b (a,b는 중복된 두 수)
    // 2) x의 최하위 set bit로 두 그룹 분리
    const lowbit = x & -x;

    let g1 = 0, g2 = 0;
    for (const v of nums) {
        if (v & lowbit) g1 ^= v;
        else g2 ^= v;
    }
    for (let i = 0; i < n; i++) {
        if (i & lowbit) g1 ^= i;
        else g2 ^= i;
    }

    // g1, g2가 곧 중복된 두 수 (순서는 상관 없음)
    return [g1, g2];
};