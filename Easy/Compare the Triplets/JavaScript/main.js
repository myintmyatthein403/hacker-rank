/*
 * Complete the 'compareTriplets' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY a
 *  2. INTEGER_ARRAY b
 */

function compareTriplets(a, b) {
  try {
    let alice = 0;
    let bob = 0;

    for (let i = 0; i < a.length; i++) {
      if (a[i] > b[i]) {
        alice++;
      } else if (a[i] < b[i]) {
        bob++;
      }
    }

    return [alice, bob];
  } catch (error) {
    console.error(error);
  }
}

// Test Case
console.log(compareTriplets([5, 6, 7], [3, 6, 10])); // [1, 1]
console.log(compareTriplets([17, 28, 30], [99, 16, 8])); // [2, 1]

