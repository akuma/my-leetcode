/**
 * Count Primes
 * https://leetcode.com/problems/count-primes/
 *
 * @param {number} n
 * @return {number}
 */
const countPrimes = function(n) {
  const isPrimes = [false, false]
  for (let i = 2; i < n; i++) {
    isPrimes.push(true)
  }

  for (let i = 2; i * i < n; i++) {
    if (!isPrimes[i]) {
      continue
    }

    for (let j = i * i; j < n; j += i) {
      isPrimes[j] = false
    }
  }

  let count = 0;
  for (let i = 2; i < n; i++) {
    if (isPrimes[i]) {
      count++
    }
  }
  return count
}
