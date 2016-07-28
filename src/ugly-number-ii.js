/**
 * Ugly Number II
 * https://leetcode.com/problems/ugly-number-ii/
 *
 * @param {number} n
 * @return {number}
 */
const nthUglyNumber = function(n) {
  const uglyNums = [1]
  let [ugly2Idx, ugly3Idx, ugly5Idx] = [0, 0, 0]

  for (let i = 1; i < n; i++) {
    const uglyNum2 = uglyNums[ugly2Idx] * 2
    const uglyNum3 = uglyNums[ugly3Idx] * 3
    const uglyNum5 = uglyNums[ugly5Idx] * 5

    const uglyNum = Math.min(uglyNum2, uglyNum3, uglyNum5)
    uglyNums.push(uglyNum)

    if (uglyNum == uglyNum2) {
      ugly2Idx++
    }

    if (uglyNum === uglyNum3) {
      ugly3Idx++
    }

    if (uglyNum === uglyNum5) {
      ugly5Idx++
    }
  }

  return uglyNums[n - 1]
}
